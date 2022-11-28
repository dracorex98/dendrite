import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?client_id=account-console&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Frealms%2Fmyrealm%2Faccount%2F%23%2F&state=9c0cecef-e78f-4ecb-aacb-8eeaa38016e4&response_mode=fragment&response_type=code&scope=openid&nonce=bc705f39-7c36-4993-a694-60642d365d8b&code_challenge=Q9xY-eFXjSi9A58NV1YwYZEiQ9KXC2-xFP5Z3xZ1O1I&code_challenge_method=S256",
 realm: "myrealm",
 clientId: "myclient",
});

export default keycloak;