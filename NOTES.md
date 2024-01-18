# Additional Reflections

## Considerations for Future Development

### User Authentication

- **Role-Based Access Control**: Implement role-based access control to restrict access to certain endpoints based on user roles. JWTs or session-based authentication can be utilized.
- **Securely Managing Environment Variables**: Ensure that `.env` files or environment variables are securely managed, particularly in production environments.
- **Comprehensive Testing**: Include thorough testing of Authentication endpoints to ensure security and functionality.

## Features and Logic

### ISBN Number Accessibility

- **Feature**: Access books by ISBN number in addition to the ID.
- **Logic**: Implemented to allow the bookstore owner to access book details using ISBNs, readily available on the back of each book.
- **Purpose**: Enhances user-friendliness for the owner, who might not be familiar with the internal ID of each book.

### Duplicate Entry Prevention

- **Feature**: Prevention of duplicate book entries based on the combination of book title and author.
- **Logic**: The system checks for existing books with the same title and author before allowing a new book to be added to the database.
- **Purpose**: Maintains data integrity and accuracy by avoiding duplicate entries.

### Low Stock Notification Logic

- **Feature**: Automated notification trigger for low stock books.
- **Logic**: A book's stock status is marked as low if its quantity falls to 5 or less. This change triggers a notification to the service-notifier.
- **Assumption**: The threshold for low stock is set at 5, based on standard bookstore operations.
- **Purpose**: Alerts the owner to replenish stock, ensuring continuous availability of books.

## Missing Elements in the Ticket/Epic Description

1. **Detailed Security Standards**: Details on security standards and compliance requirements were missing.
2. **API Route Specifications**: The ticket should list all the exact API routes, including paths and HTTP methods.
3. **Behavior Expectations**: Detailed behavior expectations for each route, including request and response formats.
4. **Notification Service Endpoint**: Explicit information about the notification service's endpoint and its expected responses.
5. **Clear Deadline or Timeline**: A clear deadline or timeline for the project is essential.
6. **Given-When-Then Scenarios**: Inclusion of specific scenarios using the "Given-When-Then" format to clarify functionality.
7. **Book Object Field Definitions**: A complete definition of the book object's fields, including which fields are mandatory, optional, and immutable.
8. **Low Stock Threshold Specification**: Specification of the threshold value that triggers the 'low stock' status.
