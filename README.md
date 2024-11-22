# NextJS Boilerplate with Authentication

## Tech Stack
- NextJS 15
- React Query
- Axios
- TypeScript
- Iron-Session
- Middleware-based Authentication

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── (account)/
│   │   │   ├── login/page.tsx
│   │   │   ├── signup/page.tsx
│   │   ├── (protected)/
│   │   │   └── dashboard/page.tsx
│   ├── components/
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── hooks/
        └── useAuth.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   └── session.ts
│   ├── middleware.ts
│   └── server-actions/
│       └── get-session.ts
```

## Authentication Flow

### Login Process
1. External API Authentication
   - Use React Query mutation to authenticate with external provider
   - On successful authentication:
     - Call internal `/api/session` endpoint
     - Save token in encrypted cookies
     - Store user info in local storage

### Logout Process
- Send DELETE request to `/api/session` endpoint
- Clear session cookies
- Remove user info from local storage

## Authentication Context
- Client-side context manages:
  - User details
  - Authentication token
- Server components fetch token via server actions

## Authorization
- Middleware prevents:
  - Logged-in users accessing auth routes (login, sign-up, forgot-password)
  - Unauthenticated users accessing protected routes
- Customizable middleware rules

## Session Management
- Uses Iron-Session for secure, encrypted cookie handling
- Encrypts sensitive session information

## Key Dependencies
- `@tanstack/react-query`: Data fetching and state management
- `iron-session`: Secure session management
- `next`: React framework
- `typescript`: Type safety
- `axios`: HTTP client for API requests (for client components)

## Environment Setup
1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Set up environment variables in the root directory (.env.development, .env.production, .env.staging)

   ```
   NEXT_PUBLIC_API_BASE_URL=
   NEXT_PUBLIC_HOTJAR_CUSTOMER_APP_ID=
   NEXT_PUBLIC_MIX_PANEL_TOKEN=
   NEXT_PUBLIC_MIX_PANEL_DEBUGGER=
   SESSION_PASSWORD=
   SESSION_COOKIE_NAME=
   ```
4. Run development server
   ```bash
   npm run dev
   ```

## Authorization in client component (page)
```tsx
// Example protected route for client component
// e.g app/protected-client/page.tsx
'use client'


import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { AppRoutes } from "@/constants/routes";

const ProtectedClient = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if(!isAuthenticated) {
   router.replace(AppRoutes.LOGIN)
  }

  return (
    <div>Protected Client Page</div>
  )
}

```

## Authorization in server component (page)
```tsx
// Example protected route for client component
// e.g app/protected-server/page.tsx
// by default every component or page is a server component
import { getSession } from "@/server-actions/get-session";

const ProtectedServerPage = async () => {
  const { token, isLoggedIn } = await getSession();

  if(!isLoggedIn) {
    redirect(AppRoutes.LOGIN)
  }

  return (
    <div>Protected Server Page</div>
  )
}

```


## Customization
- Modify `middleware.ts` for custom route protection
- Adjust session management in `lib/session.ts` (e.g cookie expiry)


## Deployment
Ensure all environment variables are configured in your deployment platform.


## More Reading
- [Server Actions - react.js](https://react.dev/reference/rsc/server-actions)
- [Server Actions - next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration#route-segment-config)
- [Iron-Session](https://github.com/vvo/iron-session/tree/main?tab=readme-ov-file#installation)
- [React-query](https://tanstack.com/query/v5/docs/framework/react/overview)
