# Liivrr Strategy Deck

## Build
- Replace the placeholder with a browser-based 16:9 strategy deck using the supplied five-phase roadmap.
- Add a concise opening strategy, execution timeline, five phase slides, KPI scorecard, and closing priorities.
- Use a restrained executive visual system with clear hierarchy, high contrast, and presentation-ready typography.

## Interaction
- Add slide navigation, keyboard controls, touch swipes, overview mode, and fullscreen presentation.
- Keep the current slide in the URL so shared links and refreshes preserve position.
- Add a direct **Download PDF** action that generates and downloads the deck as a PDF file without opening the print dialog.

## Technical details
- Use the existing TanStack app and a single reusable 1920×1080 slide scaler.
- Generate the PDF in the browser from the slide content, with one landscape page per slide.
- Add route-specific page metadata and verify desktop and mobile rendering plus PDF generation.
