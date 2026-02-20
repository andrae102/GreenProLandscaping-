/* ================================
GREENPRO LANDSCAPING - VIBRANT GREEN THEME
================================ */
:root {
/* Primary Colors - Nature Green */
–green-primary: #22C55E;
–green-dark: #16A34A;
–green-light: #86EFAC;

```
/* Accent Colors */
--orange-primary: #FB923C;
--orange-dark: #F97316;
--yellow-primary: #FBBF24;

/* Base Colors */
--black: #0A0A0A;
--charcoal: #1F1F1F;
--gray-dark: #374151;
--gray: #6B7280;
--gray-light: #D1D5DB;
--gray-lighter: #F3F4F6;
--white: #FFFFFF;

/* Gradients */
--gradient-green: linear-gradient(135deg, #22C55E 0%, #16A34A 100%);
--gradient-orange: linear-gradient(135deg, #FB923C 0%, #F97316 100%);
--gradient-hero: linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 50%, #FFF7ED 100%);

/* Typography */
--font-display: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;

/* Shadows */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.18);
--shadow-green: 0 12px 36px rgba(34, 197, 94, 0.4);
--shadow-orange: 0 12px 36px rgba(251, 146, 60, 0.4);
```

}

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

html {
scroll-behavior: smooth;
}

body {
font-family: var(–font-body);
background: var(–white);
color: var(–black);
line-height: 1.6;
overflow-x: hidden;
}

.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;
}

/* ================================
Navigation - Bold & Modern
================================ */
.navbar {
background: var(–white);
box-shadow: 0 4px 24px rgba(34, 197, 94, 0.15);
padding: 22px 0;
position: sticky;
top: 0;
z-index: 999;
border-bottom: 4px solid var(–green-primary);
}

.navbar .container {
display: flex;
justify-content: space-between;
align-items: center;
}

.navbar-brand {
display: flex;
align-items: center;
gap: 18px;
text-decoration: none;
}

.brand-icon {
width: 50px;
height: 50px;
background: var(–gradient-green);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 28px;
box-shadow: var(–shadow-green);
}

.navbar-brand span {
font-family: var(–font-display);
font-size: 28px;
font-weight: 900;
background: var(–gradient-green);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
letter-spacing: -0.5px;
}

.nav-menu {
display: flex;
gap: 45px;
list-style: none;
align-items: center;
}

.nav-link {
color: var(–black);
text-decoration: none;
font-weight: 700;
font-size: 17px;
transition: all 0.3s;
position: relative;
}

.nav-link::after {
content: ‘’;
position: absolute;
bottom: -8px;
left: 0;
width: 0;
height: 4px;
background: var(–gradient-green);
border-radius: 2px;
transition: width 0.3s;
}

.nav-link:hover {
color: var(–green-primary);
}

.nav-link:hover::after {
width: 100%;
}

/* ================================
Button System - Bold CTAs
================================ */
.btn {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 12px;
padding: 18px 36px;
border-radius: 14px;
font-weight: 800;
text-decoration: none;
transition: all 0.3s ease;
cursor: pointer;
border: none;
font-family: var(–font-body);
font-size: 18px;
position: relative;
overflow: hidden;
}

.btn::before {
content: ‘’;
position: absolute;
top: 50%;
left: 50%;
width: 0;
height: 0;
border-radius: 50%;
background: rgba(255, 255, 255, 0.3);
transform: translate(-50%, -50%);
transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
width: 400px;
height: 400px;
}

.btn-primary {
background: var(–gradient-green);
color: var(–white);
box-shadow: var(–shadow-green);
}

.btn-primary:hover {
transform: translateY(-3px);
box-shadow: 0 16px 48px rgba(34, 197, 94, 0.5);
}

.btn-outline {
background: var(–white);
color: var(–green-primary);
border: 3px solid var(–green-primary);
}

.btn-outline:hover {
background: var(–green-primary);
color: var(–white);
}

.btn-lg {
padding: 22px 44px;
font-size: 20px;
}

.btn-light {
background: var(–white);
color: var(–green-primary);
}

.btn-light:hover {
background: var(–gray-lighter);
}

/* ================================
Hero - BOLD & ATTENTION-GRABBING
================================ */
.hero {
background: var(–gradient-hero);
padding: 140px 0 120px;
position: relative;
overflow: hidden;
}

.hero::before {
content: ‘🌿’;
position: absolute;
top: 10%;
right: 10%;
font-size: 200px;
opacity: 0.08;
animation: float 8s ease-in-out infinite;
}

.hero::after {
content: ‘🍃’;
position: absolute;
bottom: 10%;
left: 10%;
font-size: 180px;
opacity: 0.08;
animation: float 10s ease-in-out infinite;
}

@keyframes float {
0%, 100% { transform: translateY(0) rotate(0deg); }
50% { transform: translateY(-30px) rotate(15deg); }
}

.hero-content {
max-width: 900px;
position: relative;
z-index: 1;
}

.hero-badge {
display: inline-flex;
align-items: center;
gap: 12px;
padding: 14px 28px;
background: var(–white);
border-radius: 100px;
font-weight: 900;
color: var(–black);
margin-bottom: 40px;
box-shadow: var(–shadow-lg);
border: 3px solid var(–green-primary);
animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
}

.badge-dot {
width: 12px;
height: 12px;
background: var(–green-primary);
border-radius: 50%;
animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
0%, 100% { opacity: 1; transform: scale(1); }
50% { opacity: 0.5; transform: scale(1.3); }
}

.hero h1 {
font-family: var(–font-display);
font-size: 80px;
font-weight: 900;
line-height: 1.05;
margin-bottom: 35px;
color: var(–black);
letter-spacing: -2px;
}

.gradient-text {
background: var(–gradient-green);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
display: inline-block;
}

.lead {
font-size: 24px;
color: var(–gray-dark);
margin-bottom: 50px;
line-height: 1.7;
font-weight: 500;
}

/* ================================
Stats Bar - HIGH IMPACT
================================ */
.stats {
background: var(–black);
padding: 80px 0;
position: relative;
overflow: hidden;
}

.stats::before {
content: ‘’;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: repeating-linear-gradient(
90deg,
transparent,
transparent 50px,
rgba(34, 197, 94, 0.05) 50px,
rgba(34, 197, 94, 0.05) 100px
);
}

.stats .container {
position: relative;
z-index: 1;
}

.stat-box {
text-align: center;
color: var(–white);
padding: 30px;
border-radius: 20px;
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 2px solid rgba(34, 197, 94, 0.3);
transition: all 0.4s;
}

.stat-box:hover {
transform: translateY(-10px);
background: rgba(255, 255, 255, 0.08);
border-color: var(–green-primary);
box-shadow: var(–shadow-green);
}

.stat-number {
font-family: var(–font-display);
font-size: 64px;
font-weight: 900;
background: linear-gradient(135deg, var(–orange-primary), var(–green-primary), var(–yellow-primary));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
margin-bottom: 14px;
line-height: 1;
}

.stat-label {
font-size: 18px;
color: var(–gray-light);
font-weight: 700;
}

/* ================================
Image Showcase
================================ */
.image-showcase {
padding: 100px 0;
background: var(–gray-lighter);
}

.showcase-img {
height: 400px;
border-radius: 24px;
overflow: hidden;
position: relative;
transition: all 0.4s;
display: flex;
align-items: flex-end;
padding: 40px;
background-size: cover;
background-position: center;
}

.showcase-img::before {
content: ‘’;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
z-index: 1;
}

.showcase-img:hover {
transform: translateY(-12px);
box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}

.showcase-overlay {
position: relative;
z-index: 2;
color: white;
}

.showcase-overlay h4 {
font-weight: 900;
font-size: 28px;
margin-bottom: 10px;
}

.showcase-overlay p {
font-size: 18px;
opacity: 0.95;
}

/* ================================
Services Section
================================ */
.services {
padding: 120px 0;
background: var(–white);
}

.section-title {
font-family: var(–font-display);
font-size: 60px;
font-weight: 900;
color: var(–black);
margin-bottom: 20px;
letter-spacing: -1px;
text-align: center;
}

.section-subtitle {
font-size: 24px;
color: var(–gray);
font-weight: 600;
text-align: center;
margin-bottom: 80px;
}

.service-card {
background: var(–gray-lighter);
padding: 50px 40px;
border-radius: 28px;
text-align: center;
border: 4px solid transparent;
transition: all 0.4s ease;
height: 100%;
}

.service-card:hover {
border-color: var(–green-primary);
transform: translateY(-12px);
box-shadow: var(–shadow-lg);
background: var(–white);
}

.service-icon {
font-size: 80px;
margin-bottom: 28px;
display: inline-block;
animation: float 3s ease-in-out infinite;
}

.service-card h4 {
font-family: var(–font-display);
font-size: 26px;
font-weight: 900;
margin-bottom: 20px;
color: var(–black);
}

.service-card p {
color: var(–gray-dark);
font-size: 17px;
font-weight: 500;
line-height: 1.7;
}

/* ================================
Gallery Section
================================ */
.gallery {
padding: 120px 0;
background: var(–gray-lighter);
}

.gallery-item {
border-radius: 24px;
overflow: hidden;
box-shadow: var(–shadow-md);
transition: all 0.4s;
height: 400px;
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
background-position: center;
position: relative;
}

.gallery-item::before {
content: ‘’;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.35);
transition: all 0.4s;
}

.gallery-item:hover::before {
background: rgba(0,0,0,0.15);
}

.gallery-item:hover {
transform: scale(1.05);
box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
}

.gallery-content {
position: relative;
z-index: 2;
color: white;
text-align: center;
}

.gallery-content h5 {
font-family: var(–font-display);
font-weight: 900;
font-size: 24px;
}

/* ================================
CTA Section
================================ */
.cta-section {
padding: 120px 0;
background: var(–gradient-green);
color: white;
text-align: center;
position: relative;
overflow: hidden;
}

.cta-section::before {
content: ‘’;
position: absolute;
top: -50%;
left: -50%;
width: 200%;
height: 200%;
background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
animation: rotate 30s linear infinite;
}

@keyframes rotate {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}

.cta-section h2 {
font-family: var(–font-display);
font-size: 68px;
font-weight: 900;
margin-bottom: 28px;
position: relative;
z-index: 1;
letter-spacing: -1px;
}

.cta-section p {
font-size: 26px;
margin-bottom: 55px;
font-weight: 600;
position: relative;
z-index: 1;
}

/* ================================
Contact Section
================================ */
.contact {
padding: 120px 0;
background: var(–white);
}

.contact-card {
background: var(–gray-lighter);
padding: 50px 40px;
border-radius: 24px;
text-align: center;
transition: all 0.4s;
border: 3px solid transparent;
}

.contact-card:hover {
background: var(–white);
box-shadow: var(–shadow-lg);
border-color: var(–green-primary);
transform: translateY(-8px);
}

.contact-icon {
width: 80px;
height: 80px;
background: var(–gradient-green);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 36px;
margin: 0 auto 25px;
color: white;
box-shadow: var(–shadow-green);
}

.contact-card h5 {
font-weight: 900;
font-size: 22px;
margin-bottom: 15px;
}

.contact-card p {
color: var(–gray);
margin-bottom: 8px;
font-size: 16px;
}

.contact-card a {
color: var(–green-primary);
text-decoration: none;
font-weight: 800;
font-size: 18px;
}

.contact-card a:hover {
color: var(–green-dark);
}

/* ================================
Footer - PROFESSIONAL
================================ */
.footer {
background: var(–black);
padding: 80px 0 40px;
color: var(–white);
}

.footer h5 {
font-weight: 900;
font-size: 24px;
margin-bottom: 24px;
background: var(–gradient-green);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.footer p,
.footer a {
color: var(–gray-light);
}

.footer a {
text-decoration: none;
transition: color 0.3s;
font-weight: 600;
}

.footer a:hover {
color: var(–green-primary);
}

/* ================================
WhatsApp Float - PROMINENT
================================ */
.whatsapp-float {
position: fixed;
bottom: 40px;
right: 40px;
background: #25D366;
color: var(–white);
width: 70px;
height: 70px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 12px 40px rgba(37, 211, 102, 0.5);
z-index: 9999;
transition: all 0.3s ease;
text-decoration: none;
font-size: 36px;
border: 4px solid var(–white);
}

.whatsapp-float:hover {
transform: scale(1.15);
box-shadow: 0 20px 60px rgba(37, 211, 102, 0.6);
}

/* ================================
Responsive
================================ */
@media (max-width: 1024px) {
.hero h1 { font-size: 60px; }
.section-title { font-size: 48px; }
}

@media (max-width: 768px) {
.nav-menu { display: none; }
.hero { padding: 90px 0 70px; }
.hero h1 { font-size: 44px; }
.lead { font-size: 20px; }
.btn { width: 100%; }
.showcase-img { height: 280px; }
.gallery-item { height: 300px; }
.cta-section h2 { font-size: 42px; }
.whatsapp-float { bottom: 24px; right: 24px; width: 60px; height: 60px; font-size: 30px; }
}
