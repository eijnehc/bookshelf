/** @jsx jsx */
import {jsx} from '@emotion/core'
import * as React from 'react'

import './bootstrap'
import Tooltip from '@reach/tooltip'
import {FaSearch} from 'react-icons/fa'
import {Input, BookListUL, Spinner} from './components/lib'
import {BookRow} from './components/book-row'
import {client} from './utils/api-client'

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
}

function DiscoverBooksScreen() {
  const [state, setState] = React.useState({
    status: STATUS.IDLE,
    data: null,
    query: '',
    queried: false,
  })

  React.useEffect(() => {
    if (!state.query) {
      return
    }
    setState({status: STATUS.LOADING})
    client(`books?query=${encodeURIComponent(state.query)}`).then(books => {
      setState({status: STATUS.SUCCESS, data: books})
    })
  }, [state.query])

  function handleSearchSubmit(event) {
    event.preventDefault()
    const {search} = event.target.elements
    setState({queried: true, query: search.value})
  }

  return (
    <div
      css={{maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0'}}
    >
      <form onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Search books..."
          id="search"
          css={{width: '100%'}}
        />
        <Tooltip label="Search Books">
          <label htmlFor="search">
            <button
              type="submit"
              css={{
                border: '0',
                position: 'relative',
                marginLeft: '-35px',
                background: 'transparent',
              }}
            >
              {state.status === STATUS.LOADING ? (
                <Spinner />
              ) : (
                <FaSearch aria-label="search" />
              )}
            </button>
          </label>
        </Tooltip>
      </form>

      {state.status === STATUS.SUCCESS ? (
        state.data?.books?.length ? (
          <BookListUL css={{marginTop: 20}}>
            {state.data.books.map(book => (
              <li key={book.id} aria-label={book.title}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </BookListUL>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}
    </div>
  )
}

export {DiscoverBooksScreen}
