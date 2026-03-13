# Project Summary
The **Sigree Candlelight Dinner Ordering System** is a lightweight web-based application designed to allow users to browse a curated menu, place food orders, and reserve dining slots for a special candlelight dinner event. The system provides an elegant and interactive interface where users can explore different food categories such as soups, starters, main courses, drinks, and desserts. The application is built using **HTML, CSS, and JavaScript**, ensuring a responsive and visually appealing user experience suitable for both desktop and mobile devices.

The platform includes a **client-side cart management system** implemented using JavaScript and browser **localStorage**. Users can add items to the cart, adjust quantities, view the total price, and proceed to checkout. During checkout, customers enter their personal details, select a dining slot, and upload a payment screenshot after completing payment through a QR code. JavaScript processes the order details, converts the uploaded screenshot into **Base64 format**, and prepares the order data for submission.

The system uses a **Google Apps Script web endpoint as a serverless backend** to handle order submissions. Once the form is submitted, the script stores the order details such as customer information, selected slot, and order summary in **Google Sheets**, while the uploaded payment screenshot is saved in **Google Drive**. After successful submission, the user is redirected to a confirmation page indicating that the order has been received and will be verified by the event organizers.


# Architecture Diagram

```
                         ┌──────────────────────────┐
                         │        User Browser      │
                         │  (Chrome / Mobile etc.)  │
                         └────────────┬─────────────┘
                                      │
                                      │ HTTP Requests
                                      ▼
                         ┌─────────────────────────┐
                         │   Frontend Application  │
                         │                         │
                         │  Static Website         │
                         │                         │
                         │  HTML Pages             │
                         │  - index.html           │
                         │  - menu.html            │
                         │  - checkout.html        │
                         │  - success.html         │
                         │                         │
                         │  JavaScript Logic       │
                         │  - app.js               │
                         │  - Cart Management      │
                         │  - Menu Rendering       │
                         │  - Slot Management      │
                         │  - Checkout Processing  │
                         │                         │
                         │  CSS Styling            │
                         │  - style.css            │
                         └────────────┬────────────┘
                                      │
                                      │ POST request
                                      │ (Order Data + Screenshot)
                                      ▼
                     ┌─────────────────────────────────┐
                     │   Google Apps Script Web App    │
                     │                                 │
                     │ Receives form data:             │
                     │ - Customer Name                 │
                     │ - Email                         │
                     │ - Phone                         │
                     │ - Slot Selected                 │
                     │ - Order Summary                 │
                     │ - Base64 Payment Screenshot     │
                     └───────────────┬─────────────────┘
                                     │
                                     │
              ┌──────────────────────┴─────────────────────┐
              │                                            │
              ▼                                            ▼
     ┌──────────────────────┐                   ┌──────────────────────┐
     │    Google Sheets     │                   │    Google Drive      │
     │                      │                   │                      │
     │ Stores Order Data    │                   │ Stores Screenshot    │
     │                      │                   │ Images               │
     │ - Customer Info      │                   │                      │
     │ - Slot               │                   │ Linked to Sheet Row  │
     │ - Order Summary      │                   │                      │
     │ - Timestamp          │                   │                      │
     └──────────────────────┘                   └──────────────────────┘

```

# Application Workflow Diagram

```
                ┌───────────────┐
                │   User Opens  │
                │   index.html  │
                └───────┬───────┘
                        │
                        ▼
             ┌─────────────────────┐
             │ Click "Begin Your   │
             │ Experience"         │
             └─────────┬───────────┘
                       │
                       ▼
               ┌───────────────┐
               │   menu.html   │
               │ Menu Loaded   │
               └───────┬───────┘
                       │
                       ▼
        ┌─────────────────────────────────┐
        │ app.js renders menu items       │
        │ by category:                    │
        │ Soup / Starter / Main / Drinks  │
        │ Dessert                         │
        └──────────────┬──────────────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │ User selects item   │
            │ + quantity modal    │
            └─────────┬───────────┘
                      │
                      ▼
          ┌─────────────────────────┐
          │ Add item to Cart        │
          │ Stored in localStorage  │
          └─────────┬───────────────┘
                    │
                    ▼
         ┌──────────────────────────┐
         │ User opens cart sidebar  │
         │ and reviews order        │
         └─────────┬────────────────┘
                   │
                   ▼
        ┌────────────────────────────┐
        │ Click "Proceed to Checkout"│
        │ → checkout.html            │
        └───────────┬────────────────┘
                    │
                    ▼
      ┌─────────────────────────────────┐
      │ User fills checkout form        │
      │                                 │
      │ - Name                          │
      │ - Email                         │
      │ - Phone                         │
      │ - Slot Selection                │
      │ - Upload Payment Screenshot     │
      └──────────────┬──────────────────┘
                     │
                     ▼
        ┌───────────────────────────────┐
        │ JavaScript converts screenshot│
        │ to Base64 using FileReader    │
        └──────────────┬────────────────┘
                       │
                       ▼
        ┌───────────────────────────────┐
        │ Form submitted to             │
        │ Google Apps Script endpoint   │
        └──────────────┬────────────────┘
                       │
                       ▼
        ┌───────────────────────────────┐
        │ Apps Script saves order       │
        │ in Google Sheets              │
        │ and uploads screenshot        │
        │ to Google Drive               │
        └──────────────┬────────────────┘
                       │
                       ▼
           ┌────────────────────────┐
           │ Redirect to            │
           │ success.html           │
           │ "Order Confirmed" page │
           └────────────────────────┘
```


# Javascript Logic

```
Page Load
   │
   V
DOMContentLoaded
   │
   ├── updateCartUI()
   │
   ├── renderMenu()
   │
   ├── attach event listeners
   │
   └── refreshSlotOptions()

User Action
   │
   ├── Add item → addToCart()
   │
   ├── Remove item → removeFromCart()
   │
   ├── Update qty → updateQuantity()
   │
   └── Clear cart → clearCart()

Checkout
   │
   ├── Validate fields
   │
   ├── Convert screenshot → Base64
   │
   ├── Build hidden form
   │
   ├── POST to Apps Script
   │
   └── Redirect to success page
```

# Technology Stack

```
| Layer        | Technology                     |
| ------------ | ------------------------------ |
| Frontend     | HTML, CSS, JavaScript          |
| UI Storage   | Browser LocalStorage           |
| Backend      | Google Apps Script             |
| Database     | Google Sheets                  |
| File Storage | Google Drive                   |
| Hosting      | Static hosting (likely Vercel) |

```