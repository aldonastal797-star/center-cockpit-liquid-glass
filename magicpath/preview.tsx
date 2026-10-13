// Local test host for the exact file pasted into MagicPath.
import { createRoot } from 'react-dom/client';
import { CENTER } from './CENTER.compat';

const root = document.getElementById('root');
if (!root) throw new Error('Preview root is missing');
createRoot(root).render(<CENTER />);
