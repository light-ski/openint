import type {JsonConnectorDef} from '../schema'

// Integraton with Google Docs. 
// DocWriter: Please structure the developer-facing guide similarly to https://www.2brightsparks.com/resources/articles/gdriveclientid.html (they walk through the same steps the developers need to do, but for a different app)
// The list of all scopes for this integration is available at https://developers.google.com/workspace/docs/api/auth.
export default {
  audience: ['business'],
  verticals: ['other'],
  display_name: 'Google Docs',
  stage: 'ga',
  version: 1,
  auth: {
    type: 'OAUTH2',
    authorization_request_url: 'https://accounts.google.com/o/oauth2/v2/auth',
    token_request_url: 'https://oauth2.googleapis.com/token',
    scope_separator: ' ',
    params_config: {
      authorize: {
        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent',
      },
    },
    openint_scopes: ['https://www.googleapis.com/auth/documents.currentonly'],
    scopes: [
      {
        scope: 'https://www.googleapis.com/auth/documents',
        description:
          'Provides full read/write access to Google Docs documents. Allows viewing, creating, editing, and deleting documents.',
      },
      {
        scope: 'https://www.googleapis.com/auth/documents.readonly',
        description:
          'Provides read-only access to Google Docs documents. Allows viewing document content and metadata but no modifications.',
      },
      {
        scope: 'https://www.googleapis.com/auth/drive.file',
        description:
          'Provides access to Google Docs files that the app has created or been explicitly granted access to. Limited to specific files rather than all documents.',
      },
      {
        scope: 'https://www.googleapis.com/auth/drive.readonly',
        description:
          'Provides read-only access to all Google Drive files including Docs, but no modifications allowed. Wider access than drive.file but limited to viewing.',
      },
      {
        scope: 'https://www.googleapis.com/auth/drive',
        description:
          'Provides full read/write access to all Google Drive files including Docs. The broadest permission for Docs/Drive operations.',
      },
      {
        scope: 'https://www.googleapis.com/auth/documents.currentonly',
        description:
          'Provides access only to the currently open Google Docs document (when used with Docs add-ons). Most limited scope for temporary access.',
      },
    ],
  },
} satisfies JsonConnectorDef
