# Project Context

Fake company name: "Alexbnb".
Primary target customers are millennials and Gen Z travelers aged 18–40, who prioritize affordability, authenticity, and unique local experiences over traditional hotel consistency.

## Objective
Build a 3-pages Airbnb UI clone. 
Mobile-first app.

## Mobile Layout

- Header:
    1. Search bar component: 
        - Centered, full-width
        - Expand to full page on click
        - 3 search tabs: identical as the 3 nav links (see further)
            1. Accommodations: 3 filters (3 rows)
                1. "Where" (optional): 
                    - Expanded by default
                    - Search bar with suggested destinations below
                2. "When" to add dates (optional): 
                    - Date-picker with different date range options (exact dates, various +/- days margins)
                    - "Reset" button
                    - "Next" button to go to thrid filter
                3. "Who" to add guests (optional): 
                    - Categories: Adults / Children / Infants / Pets
                    - 1 row for each category: 
                        - Left: category label with age range below, 
                        - Right: qty input
            2. Experiences: same filters as "Accommodations" tab except diffs below:
                - Filter #2: Date-picker without date range options (simpler)
                - Filter #3: No Pets for guests
            3. Services: same filters as "Accommodations" tab except diffs below:
                - Filter #2: Date-picker without date range options (simpler)
                - Filter #3: "What" (instead of "Who") => "Type of service" label (title) when expanded:
                    - Options (badges): Photography / Massage / Spa / Gastronomy...
        - On tablet/desktop: the 3 tabs (see above) are visible in search bar
        - (Mobile only) Default search footer for filters 1 & 3: 
            - Left: "Clear all" button
            - Right: "Search" button
    2. Navbar: 
        - 3 main links: 
            - Accommodations
            - Experiences
            - Services
        - Links container centered
        - Each link with icon + label below
        - Links shrink to labels only when scrolling page content
        - On tablet/desktop: 
            - Center: Navbar above Search bar
            - Left: Logo (and company name on desktop)

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
    - Each row = 1 Accommodation list component:
        1. Header: title with icon btn to see
        2. Accommodation list container component: list of accommodation cards
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
