import 'package:dio/dio.dart';
import 'package:news_app/data/models/news_model.dart';
import 'package:news_app/utils/constant.dart';

class NewsRepo {
  final dio = Dio();
  Future<NewsModel?> getNews() async {
    final response = await dio.get(
      baseURL + getNewsEndpoint,
      queryParameters: {'q': 'America', 'apiKey': apiKey},
    );
    final modelResponse = NewsModel.fromJson(response.data);
    if (response.statusCode == 200) {
      return modelResponse;
    } else {
      return null;
    }
  }
}
