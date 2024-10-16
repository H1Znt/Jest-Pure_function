export default function calculateOfHealth (object) {
  const health = object.health;

  if (health > "50") {
    return console.log("healthy");
  }
  
  if (health >= "15" & health <= "50") {
    return console.log("wounded");
  }
  
  if (health < "15") {
    return console.log("critical");
  }
}