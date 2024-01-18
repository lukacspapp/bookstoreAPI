# Service Notifier Microservice - Ticket Description

## Description

We are developing a bookstore management system that requires a microservice, named *Service Notifier*, to handle notifications. This microservice will be responsible for receiving data from the bookstoreAPI and sending notifications accordingly.

API documentation is available [here](https://papplukacs.atlassian.net/jira/software/projects/BOOK/boards/1?selectedIssue=BOOK-9).

## Requirements

### Notification Endpoint
- Implement a `/notify` endpoint in the Service Notifier microservice.
- This endpoint will receive data from the bookstoreAPI.

### Trigger for Notification
- The primary trigger for sending a notification is when a book's stock is low (less than 5 units).
- The logic to determine low stock is handled by the bookstoreAPI.
- Your service should focus on receiving this information and acting upon it.

### Error Handling
- Implement robust error handling throughout the service.
- Manage failures in receiving data from the bookstoreAPI, processing the data, and sending out notifications.

### Testing
- Thoroughly test the service for all scenarios, including correct notification delivery and handling various types of errors.
- Ensure that the service behaves as expected, even in edge cases.

### Business Logic
- If additional business logic is required, consult with the product owner first.
- Document any implemented logic for clarity.

## Data Structure

```json
{
  "type": "lowStock",
  "bookDetails": {
    "ISBN": "string",
    "title": "string",
    "author": "string",
    "price": "number",
    "quantity": "number",
    "isStockLow": "boolean"
  }
}