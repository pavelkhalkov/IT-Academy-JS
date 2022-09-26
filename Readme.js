const { expect } = require("chai");
const { createTedAndTokenContract, getHashContainer, getHashesContainer, createTags, } = require('./utils');

///
// to do
//  fix "Test user editing/ non-existent user" (fix createIfDoesNotExist) and another (new file) follow
///

describe("Test users", function() {

  it("Test user creating", async function() {
    const { TedContent, TedUser, TedCommunity, token, TedNFT } = await createTedAndTokenContract();
    const signers = await ethers.getSigners();
    const hashContainer = getHashContainer();

    await Promise.all(hashContainer.map(
      async (hash, index) => {
        return await  TedUser.connect(signers[index]).createUser(hash)
      }
    ))

    expect(await TedUser.getUsersCount()).to.equal(hashContainer.length);

    await Promise.all(hashContainer.map(async (hash, index) => {
      const user = await TedUser.getUserByIndex(index);
      // expect(user.rating).to.equal(StartUserRating);
      // expect(user.payOutRating).to.equal(StartUserRating);
      return expect(user.ipfsDoc.hash).to.equal(hash);
    }))
  });

  it("UnFollow community by non-existed user", async function() {
    const { TedContent, TedUser, TedCommunity, token, TedNFT } = await createTedAndTokenContract();
    const signers = await ethers.getSigners();
    const hashContainer = getHashContainer();
    const ipfsHashes = getHashesContainer(2);
    await TedUser.createUser(hashContainer[0]);
    await TedCommunity.createCommunity(ipfsHashes[0], createTags(5));

    await TedUser.followCommunity(1);
    
    await expect(TedUser.connect(signers[1]).unfollowCommunity(1))
    .to.be.revertedWith('user_not_found');
    await TedUser.unfollowCommunity(1);
  })
});