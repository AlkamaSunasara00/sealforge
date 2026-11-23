# SEALFORGE HOMEPAGE — FINAL DESIGN SPECIFICATION

Build the SealForge homepage as a premium, modern industrial engineering website.

The website is for **SealForge**, an engineering brand focused on:

- Mechanical Seals
- Industrial Pumps
- Cutlass Bearings

The overall design must feel **premium, technical, confident, precise and industrial**, but NOT like a generic AI-generated industrial website.

The existing website already has a **common Button component**. Use the existing/common buttons throughout the homepage. **Do not create new button styles, button components, random pill buttons, or one-off CTA styles.** Reuse the existing button component and its established styling.

The footer is already built. **Do not create, redesign, duplicate, or modify the footer.**

---

# IMPORTANT DESIGN RULES

## DO NOT MAKE IT LOOK AI-GENERATED

Avoid the common AI website patterns:

- No giant engineering grid covering the background
- No excessive dotted backgrounds
- No random glowing blue circles
- No generic gradient blobs
- No unnecessary glassmorphism
- No excessive rounded cards
- No floating random UI elements
- No meaningless technical diagrams
- No decorative circuit-board patterns
- No generic stock-photo collage
- No excessive shadows
- No repetitive card grids everywhere
- No "AI startup" visual language
- No fake statistics
- No invented certifications
- No invented years of experience
- No invented customer logos
- No invented performance claims
- No fake testimonials

The design should feel like a **real engineering company with a strong art direction**, not an AI template.

Use whitespace, typography, product photography/rendering, strong composition, scale, motion and carefully controlled visual hierarchy instead.

The background should generally be clean.

Engineering details should appear only where they actually support the visual storytelling.

---

# VISUAL DIRECTION

The website should combine:

- Premium industrial photography
- High-quality mechanical product renders
- Dark navy / charcoal sections
- Clean white sections
- Metallic product surfaces
- Controlled SealForge blue accents
- Large editorial typography
- Thin technical details used sparingly
- Strong asymmetric compositions
- Large product imagery
- Smooth scroll-based transitions

The visual language should feel closer to a **premium engineering/manufacturing brand** than a traditional industrial supplier website.

Do not make every section look identical.

Each section should have its own visual rhythm.

---

# ANIMATION PHILOSOPHY

Animation is an important part of this homepage.

However, animation must feel **engineered and intentional**, not decorative.

Use:

- GSAP / ScrollTrigger if already available
- Framer Motion if that is the existing animation system
- CSS transforms where appropriate

Do not introduce unnecessary animation libraries if the project already has a suitable animation system.

Animations must be:

- Smooth
- Responsive
- Performance-conscious
- Mobile-aware
- Interruptible
- Subtle where appropriate
- More dramatic only during major storytelling moments

Do not animate every text character unnecessarily.

---

# SECTION 01 — HERO

## Eyebrow

PRECISION • PERFORMANCE • TRUST

## Main Heading

ENGINEERED  
TO KEEP  
INDUSTRY MOVING.

## Supporting Copy

Mechanical seals, industrial pumps and cutlass bearings engineered for demanding rotating-equipment applications.

## Primary CTA

Explore Products →

## Secondary CTA

Talk to an Engineer →

Use the existing common Button component for both CTAs.

---

## HERO VISUAL

Do NOT use a generic hero banner.

Create a premium product-focused composition featuring:

- A mechanical seal as the primary visual
- Industrial pump elements integrated into the composition
- Cutlass bearing / rotating shaft detail
- Dark industrial environment
- Realistic metallic surfaces
- Controlled reflections
- Strong depth
- Large-scale product photography or high-quality renders

The products should feel physically present in the environment.

Do not place three products as three separate cards.

Instead, create one **cohesive engineering composition**.

---

## HERO ANIMATION

On initial page load:

1. Background/environment appears first.
2. Main product slowly reveals from darkness.
3. Product opacity and scale transition smoothly into position.
4. Small eyebrow text fades/slides upward.
5. Main heading reveals line-by-line.
6. Supporting copy appears after the heading.
7. CTA buttons appear last.
8. A very subtle camera/product movement begins after the entrance animation completes.

Do not make the entrance animation too slow.

The entire hero entrance should feel premium and cinematic.

---

## SCROLL ANIMATION

As the user scrolls down from the hero:

- Main product should subtly move upward and slightly scale down.
- Background depth should shift at a slower speed.
- Text should gradually move away from the focal point.
- The next section should visually take over the screen.
- Use a subtle parallax effect rather than an obvious "website animation."

The transition should feel like the camera is moving through an industrial environment.

---

# SECTION 02 — ENGINEERING TRUST STRIP

Create a minimal horizontal section immediately after the hero.

Do NOT use large cards.

## Heading

ENGINEERED FOR DEMANDING APPLICATIONS

Then show four concise principles:

### PRECISION

Engineered components for critical rotating equipment.

### PERFORMANCE

Designed around demanding operating conditions.

### RELIABILITY

Built for dependable industrial service.

### APPLICATION FOCUS

Solutions selected around the actual duty.

---

## ANIMATION

As this section enters the viewport:

- Heading gently fades upward.
- Each principle enters sequentially.
- Use a very small stagger.
- Do not use dramatic card animations.

On desktop, allow the four items to feel like one continuous engineering statement.

On mobile, stack them naturally.

---

# SECTION 03 — PRODUCT PORTFOLIO

This is one of the most important sections.

## Small Label

01 / PRODUCT PORTFOLIO

## Main Heading

THREE SYSTEMS.  
ONE ENGINEERING FOCUS.

## Supporting Copy

SealForge develops engineered solutions for sealing, pumping and rotating-shaft applications across industrial and process environments.

---

## PRODUCT PRESENTATION

Show three major product areas:

### 01

MECHANICAL SEALS

Precision sealing for pumps and rotating equipment.

Product families include:

- Balanced Mechanical Seals
- Unbalanced Mechanical Seals
- PTFE / Teflon Bellows Seals
- Single Coil Spring Seals
- Tapered Coil Spring Seals
- Rubber Bellows Seals
- Grundfos Seals

CTA:

Explore Mechanical Seals →

---

### 02

INDUSTRIAL PUMPS

Reliable fluid-handling solutions for demanding industrial services.

CTA:

Explore Industrial Pumps →

---

### 03

CUTLASS BEARINGS

Water-lubricated support for rotating shafts.

Applications include:

- Marine
- Pumps
- Water Handling
- Industrial Rotating Equipment

CTA:

Explore Cutlass Bearings →

---

## IMPORTANT VISUAL DIRECTION

Do NOT display these as three ordinary rectangular cards in a grid.

Create a more editorial composition.

For example:

- One large product area dominates the viewport.
- The other product categories sit as secondary navigation.
- Product imagery changes as the user interacts.
- The active product has significantly more visual weight.
- Use large typography rather than card-heavy UI.

---

## PRODUCT INTERACTION

On desktop:

When hovering or selecting a product category:

1. Current product image begins moving out.
2. New product image moves into position.
3. Product title changes.
4. Description changes.
5. Number indicator changes.
6. Background/environment subtly changes.
7. Transition should feel continuous rather than like a page reload.

Use a smooth 600–900ms transition.

Avoid excessive blur.

Avoid spinning products unnecessarily.

---

## SCROLL BEHAVIOUR

This section can become a sticky storytelling section.

As the user scrolls:

MECHANICAL SEALS

↓

INDUSTRIAL PUMPS

↓

CUTLASS BEARINGS

Each product should receive its own visual moment.

The product image should remain large while the content changes around it.

The transition should feel like moving through three chapters of the SealForge product portfolio.

On mobile, do not force a complicated sticky layout if it hurts usability.

Use a simpler vertical storytelling sequence.

---

# SECTION 04 — ENGINEERING STORY

## Small Label

02 / ENGINEERING

## Main Heading

EVERY APPLICATION  
HAS A DIFFERENT  
DEMAND.

## Supporting Copy

Fluid, pressure, temperature, speed, corrosion, materials and installation conditions all influence component selection.

SealForge approaches each requirement as an engineering problem — not simply a catalogue number.

---

# VISUAL CONCEPT

Create a large engineering-focused visual.

Use a mechanical seal / pump / bearing assembly.

The section should feel like the user is looking into the engineering process behind the product.

Do NOT put a giant technical grid behind everything.

Instead, use subtle details such as:

- Fine measurement lines
- Small labels
- Minimal dimensional marks
- Controlled technical annotations
- Small engineering references
- Fine linework around the actual product

These elements should only appear around the product and should never dominate the background.

---

# SCROLL STORY

The animation should communicate four stages.

### 01

UNDERSTAND THE DUTY

Fluid  
Pressure  
Temperature  
Speed

### 02

SELECT THE MATERIAL

Carbon  
Ceramic  
Silicon Carbide  
Tungsten Carbide  
PTFE

### 03

CONFIGURE THE COMPONENT

Faces  
Elastomers  
Springs  
Metallic Components

### 04

ENGINEER THE SOLUTION

Application-specific configuration.

---

## ANIMATION

Use ScrollTrigger / existing scroll animation system.

As the user scrolls:

- Product remains visually anchored.
- Camera slowly moves closer.
- Engineering annotations appear only when relevant.
- Each stage becomes active.
- Previous stage becomes visually quieter.
- Product details become progressively more visible.
- Small lines can connect annotations to real product areas.

For example:

When "SELECT THE MATERIAL" becomes active, zoom slightly toward the sealing faces.

When "CONFIGURE THE COMPONENT" becomes active, reveal secondary components.

When "ENGINEER THE SOLUTION" becomes active, pull back and reveal the complete assembly.

The animation should tell a story.

It should NOT feel like random elements appearing on scroll.

---

# SECTION 05 — APPLICATIONS

## Small Label

03 / APPLICATIONS

## Main Heading

ENGINEERED AROUND  
THE APPLICATION.

Create a large horizontal industry experience.

Industries:

CHEMICAL

OIL & GAS

POWER

WATER & WASTEWATER

MINING

PHARMACEUTICAL

SUGAR

MARINE

IRRIGATION

GENERAL INDUSTRY

---

# VISUAL DESIGN

Do not create ten identical industry cards.

Instead, create a large visual area where the active industry occupies most of the screen.

Example:

CHEMICAL

Process transfer  
Corrosive services  
Aggressive fluids

Then the user scrolls horizontally / vertically and the next application takes over.

Use real industrial imagery where possible.

Images should feel authentic and relevant.

Avoid generic corporate stock photographs of people wearing helmets and looking at machinery.

Prioritize:

- Pumps
- Pipes
- Process equipment
- Water systems
- Marine equipment
- Industrial plants
- Rotating machinery
- Materials
- Close-up engineering details

---

# APPLICATION ANIMATION

As the user scrolls:

- Industry name changes smoothly.
- Image transitions using a controlled clip/reveal.
- Supporting copy changes.
- Small number indicator changes.
- Background lighting can subtly shift.
- Previous industry fades into the background.

The animation should feel like a **large editorial industry showcase**, not a carousel.

---

# SECTION 06 — CUSTOM ENGINEERING

## Small Label

04 / CUSTOM ENGINEERING

## Main Heading

STANDARD PRODUCTS.  
CUSTOM REQUIREMENTS.

## Copy

Not every application fits a standard configuration.

SealForge can evaluate application-specific requirements and engineered configurations where dimensions, materials, construction or operating conditions demand a tailored solution.

## CTA

Discuss Your Requirement →

Use the existing common Button component.

---

# VISUAL CONCEPT

This section should visually show:

ENGINEERING DRAWING

↓

COMPONENT

↓

FINISHED PRODUCT

Create a transformation effect.

The initial visual can look like a technical drawing.

As the user scrolls:

1. Drawing lines begin appearing.
2. Dimensions and component outlines become visible.
3. The drawing transitions into a realistic product.
4. The product gains material and lighting.
5. Final state becomes a finished SealForge component.

Do not use an actual fake CAD interface.

It should be a cinematic visual interpretation of engineering development.

---

# SECTION 07 — WHY SEALFORGE

## Small Label

05 / WHY SEALFORGE

## Main Heading

ENGINEERING  
WITHOUT THE NOISE.

Use four strong principles.

### APPLICATION-FIRST

Solutions begin with operating conditions and application requirements.

### MATERIAL KNOWLEDGE

Material selection considers fluid, temperature, pressure, wear and corrosion.

### MULTI-PRODUCT CAPABILITY

Mechanical sealing, pumping and rotating-shaft support under one engineering brand.

### ENGINEERED-TO-ORDER

Configurations can be developed around specific dimensional and application requirements where feasible.

---

# VISUAL DESIGN

Do not create four standard feature cards.

Use a strong editorial layout.

For example:

Large statement on one side.

The four principles appear progressively as the user scrolls.

Each principle can temporarily become the dominant statement.

Use typography and whitespace as the primary design elements.

---

# ANIMATION

As the user scrolls:

- Main heading remains stable.
- Each principle enters one at a time.
- Active principle becomes larger / stronger.
- Previous principle becomes quieter.
- Small supporting details appear beside the active principle.
- Final state shows all four principles together.

Keep this sophisticated and restrained.

---

# SECTION 08 — FINAL CONTACT CTA

This is the final homepage section before the existing footer.

Do NOT create another large product grid.

Do NOT repeat the product portfolio.

Do NOT repeat the engineering section.

Do NOT add contact information blocks because the contact page already exists.

---

## Small Label

06 / CONTACT

## Main Heading

HAVE A  
DEMANDING  
APPLICATION?

## Supporting Copy

Have a sealing, pumping or rotating-equipment requirement?

Tell us what you're working with and let's find the right engineering solution.

## CTA

Talk to Our Engineers →

Use the existing common Button component.

---

# FINAL CTA VISUAL

Use one strong SealForge product image.

The image should be:

- Large
- Partially cropped
- Visually integrated into the section
- Slightly overlapping the content
- Premium and realistic

Do not put the image inside a normal card.

Do not use a generic contact illustration.

---

# FINAL CTA ANIMATION

When the section enters:

1. Background transitions smoothly.
2. Large product image moves slowly into position.
3. Product rotates only if the source visual supports a realistic rotation.
4. Heading reveals line-by-line.
5. Supporting copy fades upward.
6. CTA appears last.
7. Product continues a very subtle idle movement.

The animation should feel like the final visual statement of the homepage.

---

# RESPONSIVE DESIGN

The desktop experience can use:

- Sticky sections
- Horizontal movement
- Large product compositions
- Parallax
- Scroll-driven storytelling

But do NOT simply shrink the desktop layout on mobile.

For mobile:

- Remove unnecessary sticky behaviour.
- Avoid horizontal overflow.
- Stack content naturally.
- Keep typography strong.
- Reduce animation distance.
- Keep product images large enough to understand.
- Respect `prefers-reduced-motion`.
- Ensure buttons remain usable.
- Do not let animations delay content visibility.

The homepage must feel intentionally designed for:

- Desktop
- Tablet
- Mobile

---

# PERFORMANCE

Because this is an animation-heavy industrial website:

- Lazy-load below-the-fold images.
- Use modern image formats where possible.
- Avoid loading huge images before they are needed.
- Animate transforms and opacity rather than expensive layout properties.
- Avoid excessive blur filters.
- Avoid dozens of simultaneous animations.
- Ensure scroll animations do not cause jank.
- Keep mobile performance in mind.
- Respect reduced-motion preferences.

---

# TYPOGRAPHY

Use the existing website typography system if already established.

If typography still needs to be selected:

Use a strong modern sans-serif with an engineering/editorial character.

Headings should be:

- Large
- Bold
- Tight
- Controlled
- Slightly condensed if the chosen font supports it

Body copy should remain highly readable.

Do not use futuristic sci-fi fonts.

Do not use overly rounded startup fonts.

---

# SPACING

Use generous whitespace.

The site should breathe.

Do not fill every empty area with:

- grids
- lines
- icons
- particles
- technical patterns
- floating elements

Empty space is part of the premium design.

---

# BUTTONS

VERY IMPORTANT:

There is already a common Button component in the project.

Use that component everywhere.

Do not create:

- New CTA button styles
- New pill buttons
- New custom button components
- Random icon-only buttons
- Different button shapes for different sections

Reuse the existing common Button component and its variants.

Only provide the correct button label and appropriate existing variant.

---

# NAVIGATION

Use the existing site navigation.

Do not redesign the navigation unless necessary for integration.

The homepage navigation should provide access to:

Products  
Applications  
About  
Contact

Use the existing navigation components.

---

# CONTENT RULES

Use only credible information supported by the SealForge product material.

Do not invent:

- Certifications
- Awards
- Customer names
- Installation numbers
- Revenue
- Years of experience
- Countries served
- Product performance numbers
- Guarantees
- Testimonials
- Manufacturing capabilities that are not confirmed

The website should sound confident without making unsupported claims.

---

# OVERALL EXPERIENCE

The final homepage should feel like a **premium engineering story**.

The user should experience:

HERO

↓

UNDERSTAND THE BRAND

↓

DISCOVER THE THREE PRODUCT SYSTEMS

↓

UNDERSTAND THE ENGINEERING APPROACH

↓

SEE WHERE THE PRODUCTS ARE USED

↓

UNDERSTAND CUSTOM ENGINEERING

↓

UNDERSTAND WHY SEALFORGE

↓

START A CONVERSATION

The website should never feel like:

"Hero → cards → cards → cards → footer."

It should feel like a continuous visual narrative.

Every major section should have a reason to exist.

Every animation should communicate something.

Every image should support the engineering story.

Every CTA should use the existing common button.

And most importantly:

**Do not use generic AI-generated design patterns.**

No giant background grids.

No random blue glow.

No excessive rounded cards.

No meaningless technical decorations.

No generic industrial template.

Create a **distinctive, premium SealForge visual identity** based on industrial products, engineering precision, typography, scale, whitespace, realistic materials and controlled motion.