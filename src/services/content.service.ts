'use server'

import {HotelData} from "@/interfaces/content.interfaces";
import {headers} from "next/headers";

export const getContent = async (subdomain: string): Promise<HotelData> => {
  const headersList = headers();
  const domain = headersList.get('host') || "";

  let API_URL = '';

  //Если 1 то редирект через мидлвеер на первый поддамен если 2 то на другой

  if (domain === 'localhost:3000') {
    API_URL = 'http://94.241.138.67:8000/api/v1/test/hotel1';
  } else if (domain === 'localhost:3000') {
    API_URL = 'http://94.241.138.67:8000/api/v1/test/hotel2';
  }

  try {
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const json = await response.json();
    return json.result;
  } catch (error) {
    throw new Error()
  }
};