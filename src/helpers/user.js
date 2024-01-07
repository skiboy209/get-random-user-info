import hermes from "@bakerwebsolutions/hermes"

export const loadUserProfile = async () => {
  let response = null;
  await hermes.get('https://randomuser.me/api/').then((res) => {
    console.log(res)
    response = res.results[0]
  })
  .catch((error) => {
    console.log(error);
  })
  return response;
}