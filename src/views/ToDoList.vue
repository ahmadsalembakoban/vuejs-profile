<template>
    <div class="ToDoList">
        <div class="container">
            <div class="row header mt-4 mb-3 p-3">
                <div class="col-lg-12">
                    <h3>What I Do Today?</h3>
                </div>
            </div>
            <div class="row content">
                <div class="col-lg-12">
                    <div class="pekerjaan-rumah" style="margin-top: 40px;">
                        <div class="row">
                            <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="tugas col-lg-12 mb-3 text-left">
                                <ItemTugas v-bind:tugasSaya="tugasSaya" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    import 'bootstrap/dist/css/bootstrap.css'
    import ItemTugas from '../components/ItemTugas'
    
    export default {
        name: 'ToDoList',
        data: function() {
            return {
                tugas: [
                {
                    id: 1,
                    namaTugas: 'Practise Front-End Development',
                    isDone: Boolean (false)
                },
                {
                    id: 2,
                    namaTugas: 'Practise Back-End Development',
                    isDone: Boolean (false)
                },
                {
                    id: 3,
                    namaTugas: 'Practise CRUD Applications',
                    isDone: Boolean (false)

                }
                ]
            };
        },
        components: {
            ItemTugas
        }
    }
</script>

<style scoped>
    
    .header {
        background: #1abc9c;
        color: #fff;
    }
    .header h3 {
        margin: 0;
    }
    .tugas .item {
        font-size: 18px;
    }
    .item-completed {
        color: #1abc9c;
    }
</style>
