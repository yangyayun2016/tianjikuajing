# Security Policy

## Sensitive Data

Do not commit or publish:

- `.env` files with real Amazon SP-API credentials
- LWA client secrets
- refresh tokens or access tokens
- Seller IDs, order exports, finance reports, buyer messages, or customer data
- production MCP configs containing live credentials

Use `.env.example` only as a placeholder template.

## Write Operations

The following tools can modify real Amazon seller data:

- `update_listing`
- `update_price`
- `send_solicitation`

They are blocked by default. Set `SP_ENABLE_WRITE_ACTIONS=true` only after confirming the store, marketplace, SKU, price, and Amazon policy impact.

## Reporting Issues

If you find a security issue, please report it privately through GitHub Security Advisories when available, or contact the repository owner directly.

Do not open a public issue containing live credentials, order data, customer data, or production MCP configuration.
