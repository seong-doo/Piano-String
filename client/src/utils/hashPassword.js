function hashPassword(password) {
  return crypto.subtle.digest('sha-256', new TextEncoder().encode(password))
<<<<<<< HEAD
    .then((buffer) => {
      return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
    })
=======
    .then(buffer =>
      { console.log(Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join(''))
    return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('') }
    )
>>>>>>> 3565462 (WIP: Modify components)
}

export default hashPassword;
