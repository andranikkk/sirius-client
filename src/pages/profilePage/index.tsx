import Balance from "../../components/card-balance"
import HotLinks from "../../components/card-hotLinks"
import NextLesson from "../../components/card-nextLesson"
import OfferCard from "../../components/card-offer"
import UpcomingLessons from "../../components/card-upcoming"
import Layout from "../layout"

const ProfilePage = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-4 h-[280px]">
          <OfferCard />
          <NextLesson />
          <HotLinks />
        </div>
        <div className="flex flex-row gap-6">
          <Balance />
          <UpcomingLessons />
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
