const { MongoClient } = require('mongodb')

const url = 'mongodb-connection-string'

const client = new MongoClient(url)

const dbName = 'HelloWorldDB'
const main = async () => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const collection = db.collection('user')

    //   //insert One Document
    //   const datum = {
    //     firstname: "Abhi",
    //     lastname: "Ab",
    //     city: "Bangalore",
    //     phone: "9876543210",
    //   };
    //   const insertDatum = await collection.insertOne(datum);
    //   console.log("Inserted document =>", insertDatum);

    //   //insert Multiple Document
    //   const data = {
    //     firstname: "Abhi",
    //     lastname: "Ab",
    //     city: "Bangalore",
    //     phone: "9876543210",
    //   };
    //   const insertData = await collection.insertMany([
    //     data,
    //     {
    //       firstname: "Gagan",
    //       lastname: "Ab",
    //       city: "Bangalore",
    //       phone: "9876543210",
    //     },
    //   ]);
    //   console.log("Inserted documents =>", insertData);

    //Filter Data
    const filterData = await collection.find({ firstname: 'Abhi' }).toArray()
    console.log('filterData: ', filterData)
    const countFilterData = await collection.countDocuments({
        firstname: 'Abhi',
    })
    console.log('countFilterData: ', countFilterData)

    //   //Delete Many
    //   const deleteMany = await collection.deleteMany({ firstname: "Abhi" });
    //   console.log("deleteMany: ", deleteMany);

    //   //Delete One
    //   const delOne = await collection.deleteOne({ firstname: "Abhi" });
    //   console.log("delOne: ", delOne);
    // Update One

    const updateResult = await collection.updateOne(
        { firstname: 'Abhi' },
        { $set: { lastname: 'Lavde' } }
    )
    console.log('Updated documents =>', updateResult)
    //Find All Docs in a collection
    const userData = await collection.find({}).toArray()
    console.log('userData => ', userData)
    return 'done.'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())
