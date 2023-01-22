const Donation = artifacts.require('./Donation')
const Web3 = require('web3')
const Donation1  = require('../src/abis/Donation.json');

require('chai').use(require('chai-as-promised')).should()

contract('Donation', ([deployer, manager, doner, sponser]) => {
  let donation
  let name = 'Donation'
  let result
  beforeEach(async () => {
    donation = await Donation.new()
  })

  describe('testing deployment', () => {
    describe('success', () => {
      it('track the name', async () => {
        result = await donation.name()
        result.should.equal(name)
      })
    })
    describe('failure', () => {})

    describe('Student must be registered', async () => {
      beforeEach(async () => {
        result = await donation.registerStudent(
          'Prashant Soni',
          23,
          'bachelor',
          'iamgeUrl.com',
          { from: deployer },
        )
      })
      it('register and check studentId', async () => {
        ;(await donation.studentID()).toString().should.equal('1')
      })
      it('check studentList event', async () => {
        result = await donation.getPastEvents('StudentList', {
          fromBlock: 0,
          toBlock: 'latest',
        })
        // console.log('result  : ', result)
        result.map((items) => {
          console.log('name : ', items.args.name)
          console.log('age : ', items.args.age)
          console.log('acadamic : ', items.args.acadamicLevel)
          console.log('imageurl : ', items.args.imageURL)

          console.log(' ')
        })
      })
    })

    describe('Sponser must be registered', async () => {


      it('should register sponser ', async () => {
        result = await donation.registerSponserer(
          'Prashant Soni',
          1,
          '1',
          { from: sponser },
        )
        // console.log('result  : ', result)

      })
    })

    describe('Donation transfer', async () => {
      beforeEach(async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')

        result = await donation.donate(
          doner,
          1,
          { from: doner },
        )
      })
      it('donation deducated from doner', async () => {
        let balance = Web3.utils.fromWei(await web3.eth.getBalance(doner) , 'ether');
      


        const amountToSend = web3.utils.toWei('1', "ether"); // Convert to wei value
        var send = web3.eth.sendTransaction({ from: doner, to: manager, value: amountToSend });
        result = await donation.donate(doner, Web3.utils.toWei('1' , 'ether'), { from: doner })
        let newBalance = Web3.utils.fromWei(await web3.eth.getBalance(doner) , 'ether');
        console.log("old balance is : " , balance);
        console.log("new balance after transfering 1 ether is : " , newBalance);
      })
   

      it('check DonationList event', async () => {
        result = await donation.getPastEvents('DonationList', {
          fromBlock: 0,
          toBlock: 'latest',
        })
        // console.log('result  : ', result)
        result.map((items) => {
          console.log('from : ', items.args.from)
          console.log('amount : ', items.args.amount)


          console.log(' ')
        })
      })
    })

    describe('Sponser Process', async () => {
      beforeEach(async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')

        result = await donation.sponserStudent(
          sponser,
          1,
          '1',
          { from: doner },
        )
      })
      it('donation deducated from sponser', async () => {
        let balance = Web3.utils.fromWei(await web3.eth.getBalance(sponser) , 'ether');
      


        let newBalance = Web3.utils.fromWei(await web3.eth.getBalance(sponser) , 'ether');
        const amountToSend = web3.utils.toWei('1', "ether"); // Convert to wei value
        result = await donation.donate(doner, Web3.utils.toWei('1' , 'ether'), { from: sponser })
        var send = web3.eth.sendTransaction({ from: sponser, to: manager, value: amountToSend });
        console.log("old balance is : " , balance);
        console.log("new balance after transfering 1 ether is : " , newBalance);
      })
   

      it('check SponsershipList event', async () => {
        result = await donation.getPastEvents('SponsershipList', {
          fromBlock: 0,
          toBlock: 'latest',
        })
        // console.log('result  : ', result)m;,
        result.map((items) => {
          console.log('from : ', items.args.from)
          console.log('studetnID : ', items.args.studentID)
          console.log('amount : ', items.args.amount)


          console.log(' ')
        })
      })
    })

    describe('Redeem Process', async () => {
      beforeEach(async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')

        result = await donation.redeem(
          "budget detail",
          1,
          doner,
          { from: manager },
        )
      })
      it('collection should deducated from manager', async () => {
        let balance = Web3.utils.fromWei(await web3.eth.getBalance(manager) , 'ether');
      

        const amountToSend = web3.utils.toWei('1', "ether"); // Convert to wei value
        var send = web3.eth.sendTransaction({ from: sponser, to: manager, value: amountToSend });

        let newBalance = Web3.utils.fromWei(await web3.eth.getBalance(manager) , 'ether');
        console.log("old balance is : " , balance);
        console.log("new balance after transfering 1 ether is : " , newBalance);
      })
   

      it('check RedeemList event', async () => {
        result = await donation.getPastEvents('RedeemList', {
          fromBlock: 0,
          toBlock: 'latest',
        })
        // console.log('result  : ', result)
        result.map((items) => {
          console.log('to : ', items.args.to)
          console.log('budgetFile : ', items.args.budgetFile)
          console.log('amount : ', items.args.amount)


          console.log(' ')
        })
      })
    })
  })
})
