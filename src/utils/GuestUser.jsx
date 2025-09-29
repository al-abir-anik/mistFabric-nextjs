export function getGuestUserId() {
  let guestId = localStorage.getItem("guestUserId");
  if (!guestId) {
    guestId = crypto.randomUUID();
    localStorage.setItem("guestUserId", guestId);
  }
  return guestId;
}
