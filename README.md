# Treasure Coast Happenings

A mobile app for discovering restaurants, food and drink specials, live music, and local events across Florida's Treasure Coast.

## Features
- Specials-first home screen with daily food deals and upcoming live music highlights
- Photo-led listings using mapped business and venue images, with image source credits on detail screens
- Separate email submission area for specials, music, events, corrections and photos
- Restaurant, food & drink specials, live music, and event sections
- Search within each section
- Listing detail screens with location, contact, and source links where available
- Weekly editor update displayed from `content/weekly-update.md`
- Email-based restaurant special and event submissions (no GitHub account required for submitters)

## Run locally
1. Install Node.js.
2. Run `npm install`.
3. Run `npx expo start`.
4. Open with Expo Go or use an iOS/Android simulator.

## Content and launch notes
Listings use mapped business or venue photographs from their cited sources; the app does not substitute generic illustrations or “photo coming soon” placeholders. Verify business details, event dates, and image-use permissions before public launch. Do not present unconfirmed restaurant offers as active specials.

The weekly update is maintained in `content/weekly-update.md`. The weekly screen links to that file in GitHub for editing; it is not yet an in-app authenticated editor. Restaurant and event submissions open a pre-filled email to the site owner and must be reviewed before being added.

A shared database, admin authentication, and a publishing workflow are still needed for in-app content management and scalable public updates.
