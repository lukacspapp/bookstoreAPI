import { Request, Response } from 'express';
import { Book } from "../../src/models/book";
import mockBooks from '../mock-data/books.mock.json';
import {
  createABook,
  deleteAbook,
  getAllBooks,
  getBookByISBN,
  getBookById,
  updateABook
} from '../../src/controllers/book';

jest.mock('../../src/models/book');

// POST METHOD
describe('Add a book', () => {
  it('should create a new book and return it', async () => {
    const mockRequest = {
      body: mockBooks[0]
    } as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Book as jest.Mocked<typeof Book>).prototype.save = jest.fn().mockResolvedValue(mockRequest.body);

    await createABook(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(mockRequest.body);
  });
});

// GET METHOD
describe('Get All Books', () => {
  it('should return all books', async () => {
    const mockRequest = {} as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Book as jest.Mocked<typeof Book>).find.mockResolvedValue(mockBooks as any);
    await getAllBooks(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockBooks);
  });
});

// GET METHOD BY ID
describe('Get a Book by ID', () => {
  it('should get a book by id', async () => {
    const mockRequest = {
      params: {
        id: '1'
      }
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Book as jest.Mocked<typeof Book>).findById.mockResolvedValue(mockBooks[0] as any);

    await getBookById(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockBooks[0]);
  });
});

// GET METHOD BY ISBN
describe('Get a Book by ISBN', () => {
  it('should get a book by ISBN', async () => {
    const mockRequest = {
      params: {
        isbn: '12345'
      }
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Book as jest.Mocked<typeof Book>).findOne.mockResolvedValue(mockBooks[0] as any);

    await getBookByISBN(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockBooks[0]);
  });
})

// PATCH METHOD
describe('Update a Book', () => {
  it('should update a book', async () => {
    const mockRequest = {
      params: {
        id: '1'
      },
      body: {
        title: 'Title'
      }
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    const updatedBook = { ...mockBooks[0], title: 'Updated Title' };

    (Book as jest.Mocked<typeof Book>).findByIdAndUpdate.mockResolvedValue(updatedBook as any);

    await updateABook(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(updatedBook);
  })

  it('should return 404 if book does not exist', async () => {
    const mockRequest = {
      params: {
        id: 'nonexistentId'
      },
      body: {
        title: 'Title'
      }
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Book.findByIdAndUpdate as jest.MockedFunction<typeof Book.findByIdAndUpdate>).mockResolvedValue(null);

    await updateABook(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Book not found' });
  });

  it('should return 400 if invalid field is provided', async () => {
    const mockRequest = {
      params: {
        id: '1'
      },
      body: {
        invalidField: 'invalidField'
      }
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    await updateABook(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Invalid field(s) provided: invalidField' });
  });

});

// DELETE METHOD
describe('Delete a book', () => {
  it('should delete a book', async () => {
    const mockRequest = {
      params: {
        id: '1'
      }
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Book as jest.Mocked<typeof Book>).findByIdAndDelete.mockResolvedValue(mockBooks[0] as any);

    await deleteAbook(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockBooks[0]);
  });
})