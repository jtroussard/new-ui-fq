export const fetchMemberDetails = (id) => {
  console.log("Fetching member details for", id);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Received response from API");
      resolve({
        id,
        firstName: "Mock",
        lastName: "User",
        bio: "This is a mock bio.",
        joinDate: "2022-01-01",
        profilePictureUrl: "/src/assets/avatar.jpg",
      });
    }, 500);
  });
};
  