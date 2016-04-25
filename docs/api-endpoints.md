# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Happening

- `GET /api/happening`
  - Session index/search
  - accepts `game` query param to list happening by game (bonus)
- `POST /api/happening`
- `GET /api/happening/:id`
- `PATCH /api/happening/:id`
- `DELETE /api/happening/:id`

### Tags

- A happening's tags will be included in the note show template
- `GET /api/tags`
- `POST /api/tags`: add tag to happening (include happening in params)
- `DELETE /api/tags`: remove tag from happening
  name
