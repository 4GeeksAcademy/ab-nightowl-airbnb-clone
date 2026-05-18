# Project Context

Fake company name: "Alexbnb".
Primary target customers are millennials and Gen Z travelers aged 18–40, who prioritize affordability, authenticity, and unique local experiences over traditional hotel consistency.

## Objective
Build a 3-pages Airbnb UI clone. 
Mobile-first app.

## Layout

- Header:
    - Always visible, sticky at the top.
    - Left: Logo (SVG icon) before company name (Alexbnb), always visible (mobile & desktop).
    - Search bar component:
        - Desktop/tablet: white, rounded, centered, compact, 3 side-by-side filters (Where, When, Who/What), tabs above.
        - Mobile: tabs (icon + label) above, search bar as a card with 3 buttons (Where, When, Who/What) showing a dynamic summary, large Search button below.
        - Clicking a filter or Search opens a full-screen overlay with the filter content.
        - Dynamic summary in each filter (destination, dates, guests/services).
        - Suggestions under "Where" (popular destinations), calendar under "When", guest/service selector under "Who/What".
        - Search button always visible.
        - Responsive: desktop = centered, mobile = full width.
        - Mobile overlay footer: "Clear all" on the left, "Search" on the right.
        - Tabs:
            - "Accommodations": 3 filters (Where, When, Who)
            - "Experiences": 3 filters (Where, When, Who)
            - "Services": 3 filters (Where, When, What)
        - Tabs always visible above the search bar on both desktop/tablet AND mobile.
    - No main navbar on mobile (only logo and search bar).
    - On desktop/tablet: navbar centered above the search bar (if needed).
    - On desktop/tablet: user menu icons (Favorites, Sign in) must appear at the right of the header.

- Footer:
    - 3 main sections:
        1. Support
        2. How to be a host
        3. About company
    - hr
    - Last section:
        - 2 inline buttons: language & currency selection
        - Icons for social networks links (inline)
        - Inline list: copyright - privacy - conditions - company data

- Bottom navbar:
    - 3 icon buttons: 
        - Explore
        - Favorites
        - Sign in
    - Fade when scrolling down, reappears when scrolling up

## Pages
    
1. Home page - content
    - Various sections:
        - Popular homes nearby based on current geolocation
        - Great deals
        - Other accommodation sections: accommodations in trendy cities of current country mixed with other major tourist destinations of neighbouring countries
    - Homepage search behavior:
        - The "Where" filter must use useState to track the typed value.
        - Listing cards on home must be stored in local state and filtered in real time on every keystroke.
        - The active location must be tracked with useState and visually highlighted when selected.
        - On mobile, clicking the Search button in the overlay must close (hide) the mobile popover.
    - Each row = 1 Accommodation list component:
        1. Header: title with icon btn to see
        2. Accommodation list container component: list of accommodation cards
    - Each AccommodationList must include at least 7 unique items.
    - Accommodation card component:
        - Featured photo
        - Favorite icon btn
        - A guest recommendation badge for popular items
        - Accommodation name
        - Details:
            1. Available date range - host type (only for homes - not for hotels)
            2. total price - rating (always)
        - For Tablet/Desktop: back/forward icon buttons
    
2. Catalog (search results) page - content
    - A title only (for now)
    
3. Room detail page - content
    - A title only (for now)

## Constraints
- Semantic HTML
- Use Tailwind CSS for all styling: Do not use any pre-built UI component library (no shadcn, no MUI, no Ant Design, no Chakra)
- Responsive design
- Reusable components with single responsibility
- No component exceeds ~80 lines of JSX + logic. If it does, split it
- Functional components — no class components.
- Use Next.js navigation links, and folder structure conventions (`/app`, `/components`, `/types`)
- Create a style that is slightly different from Airbnb.
- All UI text must be in English.
- On desktop, page content must be wrapped in a centered wide container.
