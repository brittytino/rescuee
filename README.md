# Rescuee 🚨  
**Type-Safe Error Handling & Universal Database Toolkit**

[![npm version](https://img.shields.io/npm/v/rescuee)](https://www.npmjs.com/package/rescuee)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🛠️ Your code’s emergency toolkit for errors, databases, and type-safe operations  
> 💡 Works seamlessly with **React**, **Next.js**, **Vue**, and **Node.js**


### 📦 Installation

```bash
npm install rescuee
```

---

## ✨ Features

- **🚑 Rescue Operations**
  - `RescueTask` for async error handling
  - Retry and timeout mechanisms
  - Type-safe error recovery

- **🔗 Universal Database**
  - Unified API for PostgreSQL, MySQL, and SQLite
  - Built-in connection pooling and transactions

- **🛡️ Runtime Validation**
  - Zod-like schema validation
  - Automatic input/output typing

- **⚛️ Framework First-Class**
  - React hooks for smooth integration
  - Next.js API middleware with validation
  - Vue composables for reactivity

---

## 🚀 Quick Start

### 1. Error Handling

```ts
import { RescueTask } from 'rescuee';

const fetchUser = new RescueTask(async () => {
  const response = await fetch('/api/user');
  return response.json();
});

const user = await fetchUser
  .retry(3)
  .rescue((error) => console.log('Safe error:', error));
```

### 2. Database Connection

```ts
import { connect } from 'rescuee/db';

const db = connect({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
  },
});

const users = await db.table<{ id: number; name: string }>('users')
  .where({ active: true })
  .select('id', 'name');
```

### 3. Schema Validation

```ts
import { createSchema } from 'rescuee';

const userSchema = createSchema<{
  name: string;
  age: number;
}>()
  .string('name')
  .number('age');

const result = userSchema.parse(input);

if (!result.success) {
  throw new Error(result.error.join(', '));
}
```

---

## ⚛️ Framework Integrations

### ✅ React

```ts
import { useRescue } from 'rescuee/react';

function UserProfile() {
  const [user, error] = useRescue(fetchUserTask);

  if (error) return <ErrorFallback />;
  return <div>{user.name}</div>;
}
```

### ✅ Next.js API

```ts
import { withValidation } from 'rescuee/next';

export default withValidation(userSchema)((req, res) => {
  // req.body is now validated!
  res.status(200).json({ validData: req.body });
});
```

---

## 📚 Documentation

Full API reference and developer guides available at:  
🔗 **[tinobritty.tech/rescuee/docs](https://rescuee-docs.vercel.app)**  
> *(Replace this link with your actual docs URL)*

---

## 🤝 Contributing

We welcome your contributions!

1. **Fork** the repository  
2. **Install** dependencies:  
   ```bash
   npm install
   ```
3. **Develop** with tests:  
   ```bash
   npm test -- --watch
   ```
4. **Submit** a pull request with a clear description

See [CONTRIBUTING.md](CONTRIBUTING.md) for more guidelines.

---

## 📜 License

MIT © [BrittyTino](https://github.com/brittytino)

---

> 💡 **Pro Tip:** Use Rescuee with **TypeScript** for full-stack type safety — from database to UI! 🛡️

