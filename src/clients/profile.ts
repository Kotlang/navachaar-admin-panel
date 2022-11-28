import { ProfileClient } from "../generated/ProfileServiceClientPb";
import {
  BulkGetProfileRequest,
  GetProfileRequest,
} from "./../generated/profile_pb";

const getProfileClient = (() => {
  const authURL = process.env.REACT_APP_AUTH_URL;
  let client: ProfileClient;
  if (authURL) {
    client = new ProfileClient(authURL);
  }
  return () => {
    return client;
  };
})();

const getBulkProfileRequest = () => {
  const bulkGetProfileRequest = new BulkGetProfileRequest();
  return bulkGetProfileRequest;
};
const getProfileRequest = (userId: string) => {
  const profile = new GetProfileRequest();
  console.log(userId);
  profile.setUserid(userId);
  return profile;
};

export { getProfileClient, getBulkProfileRequest, getProfileRequest };
