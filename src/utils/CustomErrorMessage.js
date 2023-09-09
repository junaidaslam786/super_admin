
// CustomErrorMessage.js

/**
 * Utility to extract and customize error messages based on API responses.
 * @param {Object} error - The error object from RTK Query.
 * @returns {string} - The customized error message.
 */
export const CustomErrorMessage = (error) => {
    // Check for detailed error message in the error payload
    const detailedMessage = error?.data?.message || error?.message;

    if (detailedMessage) {
        return detailedMessage;
    }

    // Provide default messages based on error type
    if (error.status === 401) {
        return "Unauthorized. Please login again.";
    }
    if (error.status === 404) {
        return "Resource not found.";
    }
    if (error.status === 500) {
        return "Server error. Please try again later.";
    }

    // Fallback generic error message
    return "An unexpected error occurred.";
};

