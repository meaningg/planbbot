import axios from "axios";
const apiUrl = "https://beta-api.planb.vg";

export async function sendUserId(userId, clickId) {
  try {
    const response = await axios.get(
      `${apiUrl}/tgbot/auth?clickId=${clickId}uid=${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error.toJSON());
  }
}
