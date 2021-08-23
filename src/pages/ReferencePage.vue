<template>
  <b-container
    fluid
    class="p-4 bg-light"
  >
    <div class="mx-2"> 
      <h2> References </h2>
      <p>Click on the labels to find out more.</p>
    </div>
    <div class="mx-2">
      <b-button
        v-b-toggle.collapse-1
        variant="primary"
        class="collapse-btn-pri"
      >
        Unsupervised Learning
      </b-button>
      <b-collapse
        id="collapse-1"
        class="mt-2"
      >
        <b-card>
          <p class="card-text">
            In this project, we sought to find distinct clusters of start-ups with similar 
            characteristics to uncover insights on their growth prospect. We used K-prototype, 
            K-means, and Hierarchical Clustering to cluster the start-ups. More details about 
            each clustering approach can be found below.
          </p>
          <b-button
            v-b-toggle.collapse-1-inner-1
            size="sm"
            class="collapse-btn-sec"
          >
            Results
          </b-button>
          <b-collapse
            id="collapse-1-inner-1"
            class="mt-2"
          >
            <b-card>
              <div class="col-12">
                <p>
                  We compared the results obtained from running the different unsupervised learning methods 
                  and did not find visually distinct groups of start-ups. The clusters seem to only be distinctly
                  separable based on total funding amount. 
                </p>
              </div>
              <hr>
              <img
                src="@/assets/reference_data_1.png"
                alt="Results" 
                class="ml-auto mr-auto center" 
                style="align-self: center"
              >
              <div class="col-12">
                <p>
                  Another observation is that the average number of active products being sold decreases as start-ups receive more funding. 
                  This could be an indication that having fewer products is correlated with high funding amount. 
                  Perhaps, start-ups with fewer products are able to devote more time and effort to develop and grow their business. 
                  Being more focused on certain products may also give investors greater confidence in the start-up. 
                </p>
              </div>
            </b-card>
          </b-collapse>
          <b-button
            v-b-toggle.collapse-1-inner-2
            size="sm"
            class="collapse-btn-sec"
          >
            K-Means Clustering
          </b-button>
          <b-collapse
            id="collapse-1-inner-2"
            class="mt-2"
          >
            <b-card>
                <div class="col-12">
                  <p>
                    K-Means algorithm is one of the most popular unsupervised clustering algorithm. 
                    It uses Euclidian distance between the points and centroids to determine the location of the 
                    cluster centroids and which points belong to that particular cluster. 
                  </p>
                </div>

                <div class="col-12">
                  <p style="margin-bottom: 0px;">
                    <strong>Below is a brief overview of the K-Means algorithm</strong>:
                  </p>
                  <ol>
                    <li>Randomly select K datapoints from the dataset that will serve as the initial cluster centroids</li>
                    <li>
                      For each data point, compute the sum of squared distance between it and the cluster centroids. 
                      Assign each data point the closest cluster centroid.
                    </li>
                    <li>Re-compute the cluster centroids by taking the average of all the data points that belong to that cluster.</li>
                    <li>Repeat steps 2-3 until there is no change to the centroids</li>
                  </ol>
                </div>
                <div class="col-12">
                  <p style="margin-bottom: 0px;">
                    <strong>Limitations</strong>
                  </p>
                  <ul>
                    <li>Unable to handle categorical variables</li>
                  </ul>
                </div>
            </b-card>
          </b-collapse>
          <b-button
            v-b-toggle.collapse-1-inner-3
            size="sm"
            class="collapse-btn-sec"
          >
            K-modes
          </b-button>
          <b-collapse
            id="collapse-1-inner-3"
            class="mt-2"
          >
            <b-card>
              <div class="col-12">
                <p>
                  K-Modes is an extension of the K-Means that deals with categorical variables. 
                  Instead of using Euclidian distance to obtain the distance between two points, 
                  it uses dissimilarities and frequency-based method (mode) to update the cluster centroids. 
                </p>
                <p>
                  Matching dissimilarity score between two points is given by the total number of mismatches for all the 
                  categorical variables.
                  K-Mode uses matching dissimilarity to determine which cluster a point belongs to. 
                </p>
                <p>
                  Mode is the most frequently occurring value in a group. This is then used to update the cluster centroids by taking 
                  the mode of the cluster for each categorical variable. With that, the K-Modes method uses the same procedure as 
                  K-Means to cluster objects that have categorical attributes. 
                </p>
              </div>
            </b-card>
          </b-collapse>
          <b-button
            v-b-toggle.collapse-1-inner-4
            size="sm"
            class="collapse-btn-sec"
          >
            K-Prototyping Clustering
          </b-button>
          <b-collapse
            id="collapse-1-inner-4"
            class="mt-2"
          >
            <b-card>
              <div class="col-12">
                <p>
                  K-Prototype integrates both the K-Means and K-Mode algorithm to deal with dataset that have a mixed of 
                  numerical and categorical variables. In K-Prototype, we separate the numerical data and categorical 
                  data and apply K-means and K-mode algorithm to them respectively. 
                </p>
              </div>
            </b-card>
          </b-collapse>
          <b-button
            v-b-toggle.collapse-1-inner-5
            size="sm"
            class="collapse-btn-sec"
          >
            Hierachical Clustering
          </b-button>
          <b-collapse
            id="collapse-1-inner-5"
            class="mt-2"
          >
            <b-card>
              <div class="col-12">
                <p>
                  A method of clustering in which we being by setting every data point as a cluster and slowly merge similar groups. 
                  After a few iterations, we reach the final clusters wanted.
                </p>
                <p>
                  There are two types of hierarchical clustering – Agglomerative and Divisive. 
                  Agglomerative begins with each point being a cluster and at each iteration, we merge the closest pair of clusters 
                  until a single cluster remains. On the other hand, Divisive Hierarchical Clustering begins with all points belong 
                  to the same cluster. At each iteration, we split the furthest point in the cluster and repeat this until each 
                  cluster has only one point.
                </p>
                <p>
                  In this project, we decided to use agglomerative clustering. In order to choose the appropriate number of clusters, 
                  we used a dendrogram, which shows the sequence of merges from the algorithm. In general, the longer the vertical 
                  lines in the dendrogram, the more the distance there is between those clusters. We set the threshold where it cuts 
                  the tallest vertical line. 
                </p>
                <hr>
              </div>
              <img
                src="@/assets/reference_data_2.png"
                alt="dendrogram" 
                class="ml-auto mr-auto center" 
                style="align-self: center;"
              > 
            </b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>

    <div class="mx-2">
      <b-button
        v-b-toggle.collapse-2
        variant="primary"
        class="collapse-btn-pri"
      >
        Supervised Learning
      </b-button>
      <b-collapse
        id="collapse-2"
        class="mt-2"
      >
        <b-card>
          <p class="card-text">
            For the supervised learning aspect of this project, we aimed to predict the success of an organisation in terms of its
            IPO status. A successful start up will be classified as one having a “Public” IPO status while an unsuccessful organisation
            is one having a “Private” or “Delisted” IPO status. We utilised an XGB model and used various financial and non-financial 
            information of the organisation to make the prediction.
          </p>
          <b-button
            v-b-toggle.collapse-2-inner-1
            size="sm"
            class="collapse-btn-sec"
          >
            Data Wrangling and Preparation
          </b-button>
          <b-collapse
            id="collapse-2-inner-1"
            class="mt-2"
          >
            <b-card>
              <div class="col-12">
                <p>
                  We have engineered some features in addition to the features in the original dataset such as 
                  “location-city-in-start-up-cluster” to determine if the city location of the organisation falls in a prominent 
                  start up cluster and also applied K-Means clustering to cluster existing features with multiple categories to reduce 
                  the number of one hot encoded features generated from them. Due to the imbalanced nature of our dataset, we have 
                  utilised SMOTE to oversample the minority class (“Private” or “Delisted”) by creating duplicating examples of that class.
                  We have also used scaling on the features to standardise the features before inputting them into our chosen model.
                </p>
              </div>
            </b-card>
          </b-collapse>
          <b-button
            v-b-toggle.collapse-2-inner-2
            size="sm"
            class="collapse-btn-sec"
          >
            Model Selection
          </b-button>
          <b-collapse
            id="collapse-2-inner-2"
            class="mt-2"
          >
            <b-card>
              <div class="col-12">
                  <p>
                    To select the appropriate model for the prediction, along with XGB we experimented with multiple other models namely,
                    SVM, Decision Trees, kNN and Random Forest. Furthermore, F1 score was our metric of choice to evaluate the models due to
                    the imbalanced nature of the final dataset. Among all the models experimented with, the XGB and Random Forest models had
                    the highest F1 scores indicating that ensemble models worked best for our problem. Between the two best models we have 
                    chosen XGB due to its slightly higher F1 score and as it is a better model for imbalanced classification problems
                    due to its self correcting behaviour.
                  </p>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
  </b-container>
</template>

<script>


export default {
  name: 'ReferencePage',
  async created() {
  },

  async mounted() {
  },

  methods: {
  },
};
</script>

<style scoped>
  .collapse-btn-pri {
    color: black;
    font-size: 26px;
    font-weight: bold;
    background-color: white;
    border: 0px;
  }
  .collapse-btn-sec {
    color: black;
    font-size: 18px;
    background-color: white;
    border: 0px;
    padding: 0px 25px 0px 25px;
  }

  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
