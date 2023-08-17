import Airtable from "airtable"
import MomentCard from "@/components/cards/MomentCard"

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const findOneByValue = async function(options) {
    let theRecords = [];
    await options.base(options.table).select(
      {
        maxRecords: 1,
        view: options.view ? options.view : "Grid view",
        filterByFormula: `${options.field}='${options.value}'`
      }
    ).eachPage(function page(records, next){
      theRecords.push(...records);
      next()
    })
    // .then(()=>{
    //   // return(theRecords);
    // })
    .catch(err=>{console.error(err); return})
    return theRecords[0];
  }



export default async function Page({ params }: { params: { id: string } }) {
    let theRecord = await findOneByValue({
        base: base,
        table: "Moments",
        view: "MAIN",
        field: "Slug",
        value: params.id
    })
    return (
        <div>
            <MomentCard data={theRecord.fields} />
            <pre>{JSON.stringify(theRecord, null, 4)}</pre>
        </div>
        )
  }