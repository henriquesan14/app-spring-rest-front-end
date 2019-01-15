import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items: ProdutoDTO[] = [];
  page: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public produtoService: ProdutoService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData(){
    let categoriaId = this.navParams.get('categoria_id');
    let loader = this.presentLoading();
    this.produtoService.findByCategoria(categoriaId, this.page, 10)
    .subscribe((response)=>{
      this.items = this.items.concat(response['content']);
      console.log(this.page);
      console.log(this.items);
      loader.dismiss();
    },(error)=>{
      loader.dismiss();
    });
  }
  
  showDetail(produto_id: string){
    this.navCtrl.push('ProdutoDetailPage',{produto_id: produto_id});
  }

  presentLoading(){
    let loader = this.loadingCtrl.create({
      content: 'Aguarde...'
    });
    loader.present();
    return loader;
  }

  doRefresh(refresher){
    this.loadData();
    setTimeout(()=>{
      refresher.complete();
    },1000);
  }

  doInfinite(infiniteScroll){
    this.page++;
    this.loadData();
    setTimeout(()=>{
      infiniteScroll.complete();
    }, 1000);
  }
}
