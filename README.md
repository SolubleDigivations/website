This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Contact form configuration

The contact form persists submissions in Supabase and uploads attachments to the private
`contact-attachments` Storage bucket. Configure these variables locally and in Vercel:

The form saves the name, email, phone number, and company as a partial `new` row when
the visitor completes the first step. The final step updates that same row and sends
the notification, so partial enquiries remain available even if the visitor leaves
before completing the brief.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
RESEND_API_KEY=
CONTACT_NOTIFICATION_EMAIL=
CONTACT_FROM_EMAIL=hello@soluble.in
```

Create the private bucket in Supabase Storage with a 10 MB file-size limit. Do not add
public read, insert, update, or delete policies for the bucket or
`public.contact_submissions`; the server uses `SUPABASE_SECRET_KEY` for these operations.
`CONTACT_FROM_EMAIL` must use the domain verified in Resend. For this project it is
configured as `hello@soluble.in`. A Gmail address may be used as
`CONTACT_NOTIFICATION_EMAIL`, but it cannot be used as the sender.

For a new bucket, the Supabase SQL editor can run:

```sql
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'contact-attachments',
  'contact-attachments',
  false,
  10485760,
  array[
    'image/png',
    'image/jpeg',
    'image/svg+xml',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/octet-stream',
    'application/zip'
  ]::text[]
)
on conflict (id) do update
set public = false, file_size_limit = 10485760;
```
