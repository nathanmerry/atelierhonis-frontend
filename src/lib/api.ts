import axios from "axios";
const Api_Token = process.env.NEXT_PUBLIC_STRAPI_PUBLIC_API_TOKEN;
const Backend_Base_Url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

interface FetchBlogsParams {
  page: number;
  pageSize: number;
}

export const fetchBlogs = async (id?: string) => {
  try {
    let url = `${Backend_Base_Url}/blogs`; // Default URL to fetch all blogs

    if (id) {
      url = `${Backend_Base_Url}/blogs/${id}`; // If `id` is passed, fetch a specific blog
    }

    // Send GET request to the appropriate URL
    const response = await axios.get(url);

    // Get the blogs or blog data from the response
    const blogs = response.data.data; // Assuming the data is inside a 'data' field

    // Check if there are blogs returned
    if (!blogs || (Array.isArray(blogs) && blogs.length === 0)) {
      throw new Error("No blog data found");
    }

    return blogs; // Return the blogs or a single blog
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const fetchBlogDetailById = async (id: string, locale: string) => {
  try {
    const response = await axios.get(
      `${Backend_Base_Url}/api/furniture-sites/${id}?populate=*&locale=${locale}`, // Fetch single blog by its ID
      {
        headers: {
          Authorization: `Bearer ${Api_Token}`,
        },
      }
    );
    return response.data; // Return the blog data
  } catch (error) {
    console.error("Error fetching blog detail by ID:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const fetchPrivacyPolicy = async (locale: string) => {
  try {
    const response = await axios.get(`${Backend_Base_Url}/privacy-policy`, {
      params: { lang: locale },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    throw error;
  }
};

export const fetchTermsAndConditions = async (locale: string) => {
  try {
    const response = await axios.get(`${Backend_Base_Url}/terms-conditions`, {
      params: { lang: locale },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    throw error;
  }
};
