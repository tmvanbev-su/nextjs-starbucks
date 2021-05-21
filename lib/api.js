const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }


	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllMenuItems() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						title
						slug
						featuredImage {
							node {
								altText
								mediaDetails {
									width
									height
								}
								sourceUrl
							}
						}
					}
				}
			}
		}
	`)
	return data?.items
}

export async function getAllMenuItemSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	return data?.items
}

export async function getMenuItemBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		item(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  } 
			  sourceUrl
			}
		   }
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.item
}

export async function getMenuTypesAndMenuItems() {
	const data = await fetchAPI(`
		query MyQuery {
			menuTypes {
			edges {
				node {
				id
				name
				items {
					edges {
					node {
						id
						title
						slug
						featuredImage {
						node {
							altText
							sourceUrl
							mediaDetails {
							height
							width
							}
						}
						}
					}
					}
				}
				}
			}
			}
		}
	`)
	return data?.menuTypes
}

// LOCATIONS

export async function getAllLocations() {
	const data = await fetchAPI(`
	query MyQuery {
		locations {
		  edges {
			node {
			  id
			  title
			  slug
			  featuredImage {
				node {
				  altText
				  mediaDetails {
					width
					height
				  }
				  sourceUrl
				}
			  }
			}
		  }
		}
	  }
	`)
	return data?.locations
}

export async function getAllLocationSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		locations {
		  edges {
			node {
			  id
			  slug
			}
		  }
		}
	  }
	`)
	return data?.locations
}

export async function getLocationBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		location(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  } 
			  sourceUrl
			}
		   }
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.location
}


// PEOPLE

export async function getAllPeople() {
	const data = await fetchAPI(`
	query MyQuery {
		people {
		  edges {
			node {
			  id
			  title
			  slug
			  featuredImage {
				node {
				  altText
				  mediaDetails {
					width
					height
				  }
				  sourceUrl
				}
			  }
			}
		  }
		}
	  }
	`)
	return data?.people
}

export async function getAllPeopleSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		people {
		  edges {
			node {
			  id
			  slug
			}
		  }
		}
	  }
	`)
	return data?.people
}

export async function getPersonBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		person(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  } 
			  sourceUrl
			}
		   }
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.person
}



