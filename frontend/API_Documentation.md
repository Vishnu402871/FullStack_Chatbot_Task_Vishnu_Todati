# API Documentation

## GET /api/enquiries

Returns all enquiries.

## POST /api/enquiries

Creates a new enquiry.

Request Body:

{
  "name": "John",
  "email": "john@gmail.com",
  "phone": "9876543210",
  "message": "Need information"
}

## PUT /api/enquiries/:id

Updates enquiry status.

Request Body:

{
  "status": "Contacted"
}

## DELETE /api/enquiries/:id

Deletes an enquiry.