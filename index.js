// single landing page - conditionally points to the various site-specific application fill-ins
// two sections/ buttons to access:
// 1. application form (stored locally in browser cache, editable)
// 2. app info clipboard (uses application form data served based on site-specific needs)

import React from "react";
import App from "./src/App";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
