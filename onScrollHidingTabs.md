1. Context Setup (SharedContext)
The SharedContext provides a shared state for tracking scroll values (scrollY and scrollYGlobal) and managing the scroll-to-top functionality. Key points:

scrollY: Tracks whether the user is scrolling up or down (animated between 0 and 1).
scrollYGlobal: Tracks the absolute scroll position in the app.
scrollToTop: Smoothly scrolls back to the top of the list by animating the values of scrollY and scrollYGlobal.


2. Animating the Header in Delivery
Background Opacity (backgroundColorChanges):

The header's background color changes its opacity as the user scrolls. This is controlled by interpolate, which maps the scrollYGlobal value between [1, 50] to [0, 1].
The header becomes more visible as the user scrolls.
Header Slide Animation (moveUpStyle):

The header slides up (out of view) as the user scrolls down. translateY is interpolated between 0 and -50 based on scrollYGlobal.
This movement is clamped to prevent it from exceeding the defined range.
Nested Animation (moveUpStyleNotExtraPolate):

Demonstrates an alternative animation for the header without clamping (Extrapolation.CLAMP). This approach may allow extrapolated values beyond the defined range.


3. Main Scrollable List (MainList)
The MainList implements key features for managing scrolling behavior:

Handling Scroll Events (handleScroll)
Tracks the user's scroll direction:
Compares the current scroll position (currentScrollY) to the previous position (previousScrollY).
Updates scrollY with a smooth timing animation using withTiming.
Updates the global scroll position (scrollYGlobal) and determines if the user is near the end of the list.


Scroll-to-Top Button (backToTopStyle)
Appears dynamically when the user scrolls up and meets certain conditions:
If the user has scrolled past 180 pixels (scrollYGlobal.value > 180).
If the restaurant section or the list end is visible.
Smoothly animates its appearance using opacity and translateY with withTiming.
Detecting Visible Sections (onViewableItemChanged)
Tracks whether the "Restaurants" section is currently visible in the viewport:
Uses the viewableItems array to determine visibility.
Updates isRestaurentVisible to conditionally show or hide the back-to-top button.

4. Animated Header Integration
The header is wrapped in Animated.View components, applying the calculated moveUpStyle and backgroundColorChanges. As the user scrolls:

The header slides up and fades out simultaneously.
5. Section List (Core List Structure)
The SectionList component implements features like:

Sticky Headers: Ensures section headers stay at the top while scrolling.
Viewability Config: Tracks visible items for dynamic logic (e.g., showing the back-to-top button).


# important 6. Key Learnings
Reanimated Shared Values:

useSharedValue allows for cross-component animation state sharing.
Combined with useAnimatedStyle, it creates dynamic UI interactions.
Interpolate:

Maps one range of values (e.g., scroll position) to another range (e.g., opacity or translateY).
Extrapolation.CLAMP ensures values stay within a specific range.
Dynamic Scroll Handling:

onScroll provides fine-grained control over scroll events, enabling custom logic like detecting direction or proximity to the end of the list.
Smooth Animations:

withTiming animates shared values smoothly over a defined duration.
