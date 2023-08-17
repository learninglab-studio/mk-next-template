import Airtable from "airtable"
import MomentCard from "@/components/cards/MomentCard"

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

async function getData(MomentId) {
    try {
        const records = await base("Moments").
    } catch (error) {
        console.log(error)
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    let theRecord = await getData(params.id)
    return (<div><MomentCard record: theRecord /></div>)
  }