
const res = (() => {
  const ky = '0d8f5888225b4c37b78af65363f639cd';
  const baseURL = 'https://api.rawg.io/api/';
  const page_size = 32;

  const platforms = [
    {
      name: "PC",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>microsoft-windows</title><path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" /></svg>,
      id: 1,
    },
    {
      "id": 2,    
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sony-playstation</title><path d="M9.5,4.27C10.88,4.53 12.9,5.14 14,5.5C16.75,6.45 17.69,7.63 17.69,10.29C17.69,12.89 16.09,13.87 14.05,12.89V8.05C14.05,7.5 13.95,6.97 13.41,6.82C13,6.69 12.76,7.07 12.76,7.63V19.73L9.5,18.69V4.27M13.37,17.62L18.62,15.75C19.22,15.54 19.31,15.24 18.83,15.08C18.34,14.92 17.47,14.97 16.87,15.18L13.37,16.41V14.45L13.58,14.38C13.58,14.38 14.59,14 16,13.87C17.43,13.71 19.17,13.89 20.53,14.4C22.07,14.89 22.25,15.61 21.86,16.1C21.46,16.6 20.5,16.95 20.5,16.95L13.37,19.5V17.62M3.5,17.42C1.93,17 1.66,16.05 2.38,15.5C3.05,15 4.18,14.65 4.18,14.65L8.86,13V14.88L5.5,16.09C4.9,16.3 4.81,16.6 5.29,16.76C5.77,16.92 6.65,16.88 7.24,16.66L8.86,16.08V17.77L8.54,17.83C6.92,18.09 5.2,18 3.5,17.42Z" /></svg>,
      "name": "PlayStation",
    },
    {
      "id": 3,
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"></path></svg>,
      "name": "Xbox",
    },
    {
      "id": 4,
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>apple</title><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>,
      "name": "iOS",
    },
    {
      "id": 8,
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18"><path d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z"></path></svg>,
      "name": "Android",
    },
    {
      "id": 5,
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>apple</title><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>,
      "name": "Apple Macintosh",
    },
    {
      "id": 6,
      "name": "Linux",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>penguin</title><path d="M19,16C19,17.72 18.37,19.3 17.34,20.5C17.75,20.89 18,21.41 18,22H6C6,21.41 6.25,20.89 6.66,20.5C5.63,19.3 5,17.72 5,16H3C3,14.75 3.57,13.64 4.46,12.91L4.47,12.89C6,11.81 7,10 7,8V7A5,5 0 0,1 12,2A5,5 0 0,1 17,7V8C17,10 18,11.81 19.53,12.89L19.54,12.91C20.43,13.64 21,14.75 21,16H19M16,16A4,4 0 0,0 12,12A4,4 0 0,0 8,16A4,4 0 0,0 12,20A4,4 0 0,0 16,16M10,9L12,10.5L14,9L12,7.5L10,9M10,5A1,1 0 0,0 9,6A1,1 0 0,0 10,7A1,1 0 0,0 11,6A1,1 0 0,0 10,5M14,5A1,1 0 0,0 13,6A1,1 0 0,0 14,7A1,1 0 0,0 15,6A1,1 0 0,0 14,5Z" /></svg>,
    },
    {
      "id": 7,
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16"><path d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"></path></svg>,
      "name": "Nintendo",
    },
    {
      "id": 9,
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Atari_Official_2012_Logo.svg/220px-Atari_Official_2012_Logo.svg.png" alt="" />,
      "name": "Atari",
    },
    {
      "id": 10,
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Commodore-amiga-569580.png" alt="" /> ,
      "name": "Commodore / Amiga",
    },
    {
      "id": 11,
      icon: <img src="https://logolook.net/wp-content/uploads/2021/07/Sega-Logo.png" alt=""/>,
      "name": "SEGA",
    },
    {
      "id": 12,
      icon: <img src="https://logodix.com/logo/1722135.jpg" alt=""/>,
      "name": "3DO",
    },
    {
      "id": 13,
      icon: <img src="https://logotyp.us/file/neo-geo.svg" alt="" />,
      "name": "Neo Geo",
    },
    {
      "id": 14,
      icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>web</title><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>,
      "name": "Web",
    }
  ];

  const genres = [
    {
      "id": 4,
      "name": "Action",
      "slug": "action",
      "games_count": 181239,
      "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      icon: <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.5 11l.144.007a1.5 1.5 0 0 1 1.35 1.349L11 12.5l-.007.144a1.5 1.5 0 0 1-1.349 1.35L9.5 14H6v2h3.5c1.7 0 3.117-1.212 3.434-2.819l.03-.18L19 13c.711 0 1.388-.149 2-.416V17a3.001 3.001 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3.001 3.001 0 0 1 3 17v-4a2 2 0 0 1 2-2h4.5zM22 7.5V8l-.005.176a3 3 0 0 1-2.819 2.819L19 11h-6.337a3.501 3.501 0 0 0-2.955-1.994L9.5 9H5c-.729 0-1.412.195-2.001.536L3 6a4 4 0 0 1 4-4h9.5A5.5 5.5 0 0 1 22 7.5z"></path></g></svg>,
    },
    {
      "id": 51,
      "name": "Indie",
      "slug": "indie",
      "games_count": 67348,
      "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
    },
    {
      "id": 3,
      "name": "Adventure",
      "slug": "adventure",
      "games_count": 140936,
      "image_background": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>image-filter-hdr</title><path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" /></svg>,
    },
    {
      "id": 5,
      "name": "RPG",
      "slug": "role-playing-games-rpg",
      "games_count": 56603,
      "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      icon: <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 332.441 332.44" ><g><g><g id="Layer_5_34_"><g><g><path d="M260.777,217.262l-49.705,49.705c-0.658,0.658-0.658,1.738,0,2.398l14.825,14.824c0.658,0.656,1.738,0.656,2.396,0 l7.603-7.604c0.657-0.656,1.735-0.656,2.395,0.002l40.512,40.508c20.321,20.324,21.556,19.092,36.378,4.271 c14.821-14.822,16.057-16.057-4.269-36.379l-40.51-40.512c-0.658-0.656-0.661-1.732-0.003-2.393l7.601-7.602 c0.661-0.66,0.657-1.736,0-2.396l-14.824-14.828C262.513,216.604,261.436,216.604,260.777,217.262z M298.662,290.619 l-14.239,14.242c-1.842,1.84-4.826,1.84-6.666,0c-1.841-1.844-1.841-4.826,0-6.668l14.24-14.24c1.842-1.84,4.825-1.842,6.666,0 C300.503,285.793,300.503,288.778,298.662,290.619z M278.169,270.127l-14.24,14.242c-1.84,1.84-4.824,1.84-6.665,0 c-1.84-1.84-1.841-4.826-0.001-6.666l14.242-14.24c1.84-1.842,4.824-1.842,6.664-0.002 C280.012,265.303,280.012,268.287,278.169,270.127z"></path><g><path d="M205.74,189.598c-10.196,8.846-19.131,16.229-28.599,23.863c-0.467,0.377-1.216,1.322-0.272,2.021 c16.28,12.842,28.107,21.561,33.939,25.824c2.174,1.594,3.363,2.434,4.822,0.977c4.895-4.896,14.315-14.318,19.578-19.58 c1.463-1.461,1.084-2.674-0.316-4.188c-4.26-4.602-14.407-15.562-26.838-28.982 C207.724,189.174,207.05,188.471,205.74,189.598z"></path><path d="M125.765,170.701c10.861-11.724,20.655-22.288,31.522-33.999c0.535-0.711,0.053-1.865-0.364-2.314 c-8.375-9.016-15.716-16.908-20.923-22.48C110.686,84.803,45.448,2.472,45.448,2.472s-4.549-6.025-6.226,0.736 c-2.779,11.213-7.844,37.059,4.221,72.381c9.189,26.9,43.862,63.051,79.581,94.941 C123.553,171.004,124.738,171.576,125.765,170.701z"></path></g></g><g><path d="M293.214,3.209c-1.677-6.762-6.227-0.736-6.227-0.736s-65.236,82.33-90.552,109.436 c-22.774,24.381-86.349,93.055-98.892,106.606c-1.401,1.516-1.778,2.729-0.317,4.188c5.262,5.262,14.685,14.684,19.579,19.58 c1.458,1.457,2.65,0.617,4.823-0.977c22.286-16.305,148.499-110.501,167.362-165.719 C301.058,40.268,295.994,14.422,293.214,3.209z"></path><path d="M69.266,217.262L54.439,232.09c-0.658,0.658-0.659,1.734,0,2.396l7.601,7.602c0.659,0.658,0.656,1.734-0.002,2.394 l-40.509,40.511c-20.324,20.324-19.09,21.557-4.268,36.379c14.822,14.821,16.054,16.055,36.378-4.271l40.509-40.508 c0.659-0.658,1.737-0.658,2.395-0.002l7.602,7.604c0.657,0.656,1.737,0.656,2.396,0l14.826-14.824 c0.659-0.66,0.658-1.74,0-2.398l-49.706-49.705C71.004,216.604,69.924,216.604,69.266,217.262z M33.775,283.953 c1.841-1.842,4.826-1.84,6.667,0l14.241,14.24c1.84,1.842,1.84,4.824,0,6.668c-1.841,1.84-4.826,1.84-6.666,0l-14.241-14.242 C31.936,288.778,31.935,285.793,33.775,283.953z M54.268,263.461c1.84-1.84,4.826-1.84,6.667,0.002l14.241,14.24 c1.841,1.84,1.84,4.826,0,6.666c-1.84,1.84-4.825,1.84-6.666,0l-14.241-14.242C52.427,268.287,52.426,265.303,54.268,263.461z"></path></g></g></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>,
    },
    {
      "id": 10,
      "name": "Strategy",
      "slug": "strategy",
      "games_count": 56880,
      "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg",
      icon: <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 296.999 296.999" ><g><g><g><path d="M226.983,260.96c-1.498-4.201-5.476-7.007-9.936-7.007H57.231c-5.099,0-9.468,3.648-10.378,8.666l-4.773,26.333 c-0.218,1.204-0.173,2.458,0.247,3.607c1.005,2.749,3.556,4.44,6.306,4.44h181.553c1.363,0,2.726-0.345,3.854-1.109 c2.648-1.794,3.598-5.022,2.599-7.826L226.983,260.96z"></path><path d="M253.923,113.07L202.42,35.815l9.914-26.804c0.873-2.361,0.347-5.013-1.362-6.861c-1.71-1.851-4.314-2.584-6.733-1.896 l-48.56,13.733c-4.755-0.085-22.575,0.281-42.344,9.337c-20.892,9.57-47.981,30.99-58.39,78.68 c-14.367,65.826-0.383,116.08,8.295,138.569h137.528l12.276-12.276c2.226-2.227,2.598-5.703,0.895-8.351 c-11.321-17.596-38.038-61.909-48.365-89.48c3.783,1.293,8.071,2.127,12.604,1.89c6.445-0.337,12.327-2.696,17.551-7.028 l18.855,12.571c5.825,3.884,13.047,5.081,19.815,3.284s12.445-6.42,15.577-12.683l4.365-8.729 C255.415,117.625,255.255,115.067,253.923,113.07z M181.616,70.076h-9.094c-3.695,0-6.689-2.995-6.689-6.689 c0-3.695,2.995-6.689,6.689-6.689h9.094c3.695,0,6.689,2.995,6.689,6.689C188.305,67.082,185.311,70.076,181.616,70.076z"></path></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>,
    },
    {
      "id": 2,
      "name": "Shooter",
      "slug": "shooter",
      "games_count": 59491,
      "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pistol</title><path d="M7,5H23V9H22V10H16A1,1 0 0,0 15,11V12A2,2 0 0,1 13,14H9.62C9.24,14 8.89,14.22 8.72,14.56L6.27,19.45C6.1,19.79 5.76,20 5.38,20H2C2,20 -1,20 3,14C3,14 6,10 2,10V5H3L3.5,4H6.5L7,5M14,12V11A1,1 0 0,0 13,10H12C12,10 11,11 12,12A2,2 0 0,1 10,10A1,1 0 0,0 9,11V12A1,1 0 0,0 10,13H13A1,1 0 0,0 14,12Z" /></svg>,

    },
    {
      "id": 40,
      "name": "Casual",
      "slug": "casual",
      "games_count": 54722,
      "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
    },
    {
      "id": 14,
      "name": "Simulation",
      "slug": "simulation",
      "games_count": 70284,
      "image_background": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
    },
    {
      "id": 7,
      "name": "Puzzle",
      "slug": "puzzle",
      "games_count": 97290,
      "image_background": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>puzzle</title><path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" /></svg>,
    },
    {
      "id": 11,
      "name": "Arcade",
      "slug": "arcade",
      "games_count": 22659,
      "image_background": "https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg",
    },
    {
      "id": 83,
      "name": "Platformer",
      "slug": "platformer",
      "games_count": 100789,
      "image_background": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg",
    },
    {
      "id": 1,
      "name": "Racing",
      "slug": "racing",
      "games_count": 24857,
      "image_background": "https://media.rawg.io/media/games/ff6/ff66ce127716df74175961831ad3a23a.jpg",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>racing-helmet</title><path d="M2.2,11.2C2,13.6 2.7,15.6 4.2,17.4C5.7,19.2 7.7,20 10.1,20H20.1C20.6,20 21.1,19.8 21.5,19.4C21.9,19 22.1,18.5 22.1,18V17.2C22.1,16.6 22,15.9 21.9,15H13.7C12.7,15 11.9,14.6 11.2,13.9C10.5,13.2 10.1,12.3 10.1,11.4C10.1,9.8 10.8,8.7 12.3,8.1L17.1,6C15.4,4.8 13.4,4.1 11.1,4C8.9,3.8 6.9,4.5 5.1,5.9C3.3,7.3 2.4,9 2.2,11.2M12.1,11.4C12.1,11.8 12.3,12.2 12.6,12.5C12.9,12.8 13.3,13 13.7,13H21.5C20.9,10.8 20,9 18.7,7.6L13.1,9.9C12.4,10.1 12.1,10.6 12.1,11.4Z" /></svg>,
    },
    {
      "id": 59,
      "name": "Massively Multiplayer",
      "slug": "massively-multiplayer",
      "games_count": 3702,
      "image_background": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg",
    },
    {
      "id": 15,
      "name": "Sports",
      "slug": "sports",
      "games_count": 21600,
      "image_background": "https://media.rawg.io/media/games/a1c/a1cea552040aecf9414548e209f9c0d8.jpg",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>football</title><path d="M8.39 21L3 15.61C3 16.7 3.04 17.71 3.2 18.63C3.35 19.55 3.5 20.1 3.71 20.29C3.9 20.5 4.44 20.65 5.35 20.81S7.27 21 8.39 21M15.5 9.89L9.89 15.5L8.5 14.11L14.11 8.5L15.5 9.89M3.29 13.08L10.92 20.71C13.7 20.21 15.9 19.15 17.53 17.53C19.15 15.9 20.21 13.7 20.71 10.92L13.08 3.29C10.3 3.79 8.1 4.85 6.47 6.47S3.79 10.3 3.29 13.08M15.61 3L21 8.39C21 7.3 20.96 6.29 20.81 5.37C20.65 4.45 20.5 3.9 20.29 3.71C20.1 3.5 19.56 3.35 18.65 3.2S16.73 3 15.61 3Z" /></svg>,
    },
    {
      "id": 6,
      "name": "Fighting",
      "slug": "fighting",
      "games_count": 11756,
      "image_background": "https://media.rawg.io/media/screenshots/df1/df1a27300bf1e4696734b437d81b0fcf.jpg",
    },
    {
      "id": 19,
      "name": "Family",
      "slug": "family",
      "games_count": 5395,
      "image_background": "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
    },
    {
      "id": 28,
      "name": "Board Games",
      "slug": "board-games",
      "games_count": 8376,
      "image_background": "https://media.rawg.io/media/screenshots/f64/f6470e82e699c6f4d6e151ecaf13e256.jpg",
    },
    {
      "id": 34,
      "name": "Educational",
      "slug": "educational",
      "games_count": 15679,
      "image_background": "https://media.rawg.io/media/screenshots/a5e/a5eb5de9041397ca0f8b933c96a593b9.jpg",
    },
    {
      "id": 17,
      "name": "Card",
      "slug": "card",
      "games_count": 4529,
      "image_background": "https://media.rawg.io/media/games/69e/69ecbe81dd11f76c97d4b7c0a256429d.jpg",
    }
  ];

  const date = new Date();

  const platform_icons = {
    pc: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>microsoft-windows</title><path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" /></svg>,
    xbox: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"></path></svg>,
    playstation: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sony-playstation</title><path d="M9.5,4.27C10.88,4.53 12.9,5.14 14,5.5C16.75,6.45 17.69,7.63 17.69,10.29C17.69,12.89 16.09,13.87 14.05,12.89V8.05C14.05,7.5 13.95,6.97 13.41,6.82C13,6.69 12.76,7.07 12.76,7.63V19.73L9.5,18.69V4.27M13.37,17.62L18.62,15.75C19.22,15.54 19.31,15.24 18.83,15.08C18.34,14.92 17.47,14.97 16.87,15.18L13.37,16.41V14.45L13.58,14.38C13.58,14.38 14.59,14 16,13.87C17.43,13.71 19.17,13.89 20.53,14.4C22.07,14.89 22.25,15.61 21.86,16.1C21.46,16.6 20.5,16.95 20.5,16.95L13.37,19.5V17.62M3.5,17.42C1.93,17 1.66,16.05 2.38,15.5C3.05,15 4.18,14.65 4.18,14.65L8.86,13V14.88L5.5,16.09C4.9,16.3 4.81,16.6 5.29,16.76C5.77,16.92 6.65,16.88 7.24,16.66L8.86,16.08V17.77L8.54,17.83C6.92,18.09 5.2,18 3.5,17.42Z" /></svg>,
    ios: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>apple</title><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>,
    mac: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>apple</title><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>,
    android: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18"><path d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z"></path></svg>,
    nintendo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16"><path d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"></path></svg>,
  };

  // fetch(`https://api.rawg.io/api/games?key=${ky}&ordering=-rating`, {
  //     mode: 'cors',
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //     }
  //   }
  // ).then((respose) => {
  //   return respose.json();
  // }).then((response) => {
  //   console.log(response)
  // }).catch((err) => {
  //   console.error(err);
  // });

  return { platforms, genres, ky, baseURL, platform_icons, page_size, date }
})();

export default res;
