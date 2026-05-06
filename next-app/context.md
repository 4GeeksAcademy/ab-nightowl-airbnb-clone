# Project Context

## Objective
Build a 3-pages Airbnb UI clone. 
Mobile-first app.

## Mobile Layout

- Header:
    1. Search bar: centered, full-width.
    2. Navbar: 
        - 3 main links: 
            - Accommodations
            - Experiences
            - Services
        - Links container centered
        - Each link with icon + label below
        - Links shrink to labels only when scrolling page content

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
    
3. Room detail page - content

