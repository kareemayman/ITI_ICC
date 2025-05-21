import 'package:flutter/material.dart';
import 'package:news_app/data/models/news_model.dart';
import 'package:news_app/data/repos/news_repo.dart';
import 'package:news_app/styles/icons.dart';

class NewsScreen extends StatefulWidget {
  const NewsScreen({super.key});

  @override
  State<NewsScreen> createState() => _NewsScreenState();
}

class _NewsScreenState extends State<NewsScreen> {
  NewsModel? myNewsModel;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('News App', style: TextStyle(color: Colors.white)),
        centerTitle: true,

        backgroundColor: Colors.black,
      ),
      body: Padding(
        padding: const EdgeInsets.all(12),
        child: SizedBox(
          width: double.infinity,
          child: Padding(
            padding: const EdgeInsets.only(bottom: 20),
            child: Column(
              children: [
                ElevatedButton(
                  onPressed: () async {
                    myNewsModel = await NewsRepo().getNews();
                    setState(() {});
                  },
                  child: Text("Get News"),
                ),
                SizedBox(height: 12),
                Text("total result is: ${myNewsModel?.totalResults}"),
                SizedBox(height: 12),
                Expanded(
                  child: Center(
                    child: SizedBox(
                      width: double.infinity,
                      child: SizedBox(
                        width: MediaQuery.of(context).size.height * 320 / 375,
                        child: ListView.builder(
                          itemCount:
                              myNewsModel?.articles == null
                                  ? 1
                                  : myNewsModel!.articles.length,
                          itemBuilder: (context, index) {
                            return myNewsModel == null
                                ? const Center(
                                  child: Text("Please Click Get News"),
                                )
                                : NewsContainer(
                                  article: myNewsModel!.articles[index],
                                );
                          },
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class NewsContainer extends StatelessWidget {
  final Article article;
  const NewsContainer({super.key, required this.article});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 12),
      height: MediaQuery.of(context).size.height * 240 / 812,
      width: MediaQuery.of(context).size.height * 320 / 375,
      decoration: BoxDecoration(
        // color: Colors.red,
        borderRadius: BorderRadius.circular(8),
        image: DecorationImage(
          image: NetworkImage(
            article.urlToImage ?? 'https://via.placeholder.com/150',
          ),
          // fit: BoxFit.fill,
        ),
      ),
      child: Stack(
        children: [
          Container(
            decoration: BoxDecoration(
              color: Colors.black.withOpacity(0.3),
              borderRadius: BorderRadius.circular(8),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(height: MediaQuery.of(context).size.height * 80 / 812),
                // Spacer(),
                Text(
                  "${article.author ?? ''}",
                  style: TextStyle(fontSize: 12, color: Colors.white),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                Text(
                  "${article.title ?? ''}",
                  maxLines: 3,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  "${article.content ?? ''}",
                  style: TextStyle(fontSize: 12, color: Colors.white),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                SizedBox(height: 25),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
