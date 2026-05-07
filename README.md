# Glassfin

Glassfin is an original, Plex-inspired Jellyfin web frontend. It uses Jellyfin's HTTP API for authentication, library browsing, continue watching, search, title details, series episodes, and direct video playback.

## Screenshots

![Library browsing](<Screenshot 2026-05-06 at 10.26.09 PM.png>)

![Movie detail page](<Screenshot 2026-05-06 at 10.26.18 PM.png>)

![Series detail page](<Screenshot 2026-05-06 at 10.26.37 PM.png>)

## Run

Serve the workspace with any static server:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

Use **Browse demo library** on the sign-in screen to inspect the app without a Jellyfin server. Demo mode uses local mock data and generated artwork; real playback still requires Jellyfin.

## Jellyfin API Coverage

- `POST /Users/AuthenticateByName`
- `GET /Users/{userId}/Views`
- `GET /Users/{userId}/Items/Resume`
- `GET /Users/{userId}/Items/Latest`
- `GET /Shows/NextUp`
- `GET /Users/{userId}/Items`
- `GET /Users/{userId}/Items/{itemId}`
- `GET /Shows/{seriesId}/Seasons`
- `GET /Shows/{seriesId}/Episodes`
- `GET /Videos/{itemId}/stream`

The app stores the Jellyfin token in localStorage so the browser can make direct authenticated requests to your Jellyfin server.
