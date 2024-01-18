import mongoose from "mongoose";
import request from "supertest";
import mockBooks from '../mock-data/books.mock.json';
import dotenv from 'dotenv';
import app from "../../src/app";
dotenv.config();


describe('Basic Test', () => {
  it('checks if 1 equals 1', () => {
    expect(1).toBe(1);
  });
});