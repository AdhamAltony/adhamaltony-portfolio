import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  Database,
  GitBranch,
  KeyRound,
  Lock,
  Package,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';

const toolIconMap = {
  'React.js': Code2,
  'Next.js (App Router)': Code2,
  JavaScript: Code2,
  'Tailwind CSS': Sparkles,
  'Node.js/Express': Server,
  MongoDB: Database,
  PostgreSQL: Database,
  'REST APIs': Server,
  'Auth & RBAC': ShieldCheck,
  Python: Terminal,
  Pandas: Database,
  NumPy: Cpu,
  'Scikit-learn': Brain,
  'NLP (TF-IDF)': Brain,
  'CNNs/Transfer Learning': Brain,
  Streamlit: Sparkles,
  AWS: Cloud,
  Docker: Package,
  'Git/GitHub': GitBranch,
  Linux: Terminal,
  Postman: Wrench,
  Stripe: CreditCard,
  'Al Rajhi ARP': CreditCard,
  Hyperpay: CreditCard,
};

export function getToolIcon(label) {
  return toolIconMap[label] || Wrench;
}
