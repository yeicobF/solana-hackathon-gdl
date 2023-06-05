export const getCountryInflation = async (country) => {
  // const url = `https://api.api-ninjas.com/v1/inflation?country=${country}`
  const url = `https://api.api-ninjas.com/v1/inflation?country=${country}`

  return await fetch(url, {
    headers: {
      "X-Api-Key": "A7IZSxsQw2oVEqnuDM8hNg==F8q4mZtcvhJoLIUp",
    },
  }).then((res) => {
    console.log({ res })
    return res.json()
  })
}
