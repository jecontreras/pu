export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCaPEQn7xHtsf4jLMYyehex6WAV2-G4DBo",
    authDomain: "rockmap-965a4.firebaseapp.com",
    projectId: "rockmap-965a4",
    storageBucket: "rockmap-965a4.appspot.com",
    messagingSenderId: "1091980082191",
    appId: "1:1091980082191:web:6dba228d93d11101fff77a",
    measurementId: "G-PGT5PB2KJM"
  },
  mapboxConfig: {
    accessToken:
      "pk.eyJ1Ijoia2VzbHkiLCJhIjoiY2t3b2xzOXpkMDF0NzJybzBzMncwbjZxbSJ9.V2V84onb10Dnd33qQBodAQ" // Optional, can also be set per map (accessToken input of mgl-map)
    //geocoderAccessToken: "TOKEN" // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}"]
  }
};
