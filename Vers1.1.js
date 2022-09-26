const { expect } = require("chai");
const { createTedAndTokenContract, getHashContainer, getHashesContainer, createTags, } = require('./utils');

///
// to do
//  fix "Test user editing/ non-existent user" (fix createIfDoesNotExist) and another (new file) follow
///

describe("Test users", function() {

  it("Test user creating", async function() {
    const { TedContent, TedUser, TedCommunity, token, TedNFT } = await createTedAndTokenContract();
    const hashContainer = getHashContainer(1);

    await Promise.all(hashContainer.map(
      async (hash, index) => {
        return await  TedUser.connect(signers[index]).createUser(hash)
      }
    ))

  it("Test user editing", async function() {
    const { TedContent, TedUser, TedCommunity, token, TedNFT } = await createTedAndTokenContract();
    const hashContainer = getHashContainer();
    
    await TedUser.createUser(hashContainer[0]);
    const user = await TedUser.getUserByIndex(0);
    expect(user.ipfsDoc.hash).to.equal(hashContainer[0]);
    await TedUser.updateUser(hashContainer[1]);
    const changedUser = await TedUser.getUserByIndex(0);
    expect(changedUser.ipfsDoc.hash).to.equal(hashContainer[1]);

    expect(await TedUser.getUsersCount()).to.equal(1);
  })

  it("Follow on freaze community", async function() {
    const { TedContent, TedUser, TedCommunity, token, TedNFT } = await createTedAndTokenContract();
    const hashContainer = getHashContainer(1);
    const ipfsHashes = getHashesContainer(2);
    await TedUser.createUser(hashContainer[0]);
    await TedCommunity.createCommunity(ipfsHashes[0], createTags(5));
    await TedCommunity.freezeCommunity(1);
    
    await expect(TedUser.followCommunity(1)).to.be.revertedWith('Community is frozen');
  })

  it("Double unFollow community", async function() {
    const { TedContent, TedUser, TedCommunity, token, TedNFT } = await createTedAndTokenContract();
    const ipfsHashes = getHashesContainer(2);
    await TedUser.createUser(hashContainer[0]);
    await TedCommunity.createCommunity(ipfsHashes[0], createTags(5));


    await TedUser.followCommunity(1);
    await TedUser.unfollowCommunity(1);
    await expect(TedUser.unfollowCommunity(1)).to.be.revertedWith('comm_not_followed');
  })

  it("UnFollow community by non-existed user", async function() {
    const { TedContent, TedUser, TedCommunity, token, TedNFT } = await createTedAndTokenContract();
    const hashContainer = getHashContainer(1);
    const ipfsHashes = getHashesContainer(2);
    await TedUser.createUser(hashContainer[1]);
    await TedCommunity.createCommunity(ipfsHashes[1], createTags(8));
 
    await expect(TedUser.connect(signers[1]).unfollowCommunity(1))
    .to.be.revertedWith('user_not_found');
    await TedUser.unfollowCommunity(1);
  })
});


