import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../_utils/firebase';

const fetchRTD = async (baristaID, userDate) => {
  try {
    const RTDCollectionReference = collection(
      db,
      'Cashout',
      baristaID,
      'Date ',
      userDate,
      'RTD'
    );
    const RTDQuery = query(RTDCollectionReference);
    const RTDQuerySnapshot = await getDocs(RTDQuery);
    const RTDData = RTDQuerySnapshot.docs.map((doc) => doc.data());
    return RTDData;
  } catch (error) {
    console.error('Error fetching RTD: ', error);
    throw error;
  }
};

export default fetchRTD;
